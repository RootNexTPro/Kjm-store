routerAdd("POST", "/api/webhooks/notchpay", (c) => {
    const payload = $apis.requestInfo(c).data;

    let reference = payload.reference || (payload.data && payload.data.reference);

    if (!reference) {
        return c.json(400, { "error": "Missing reference" });
    }

    const privateKey = $os.getenv("NOTCHPAY_PRIVATE_KEY");

    if (!privateKey) {
        return c.json(500, { "error": "NOTCHPAY_PRIVATE_KEY is not configured" });
    }

    const res = $http.send({
        url: "https://api.notchpay.co/payments/" + reference,
        method: "GET",
        headers: {
            "Authorization": privateKey
        }
    });

    if (res.statusCode !== 200) {
        return c.json(400, { "error": "Payment verification failed" });
    }

    const paymentData = res.json;
    let paymentStatus = paymentData.status;

    if (paymentData.transaction && paymentData.transaction.status) {
        paymentStatus = paymentData.transaction.status;
    }

    if (paymentStatus === "complete" || paymentStatus === "successful") {
        try {
            const record = $app.dao().findFirstRecordByData("orders", "reference", reference);

            if (record.get("status") !== "paid") {
                record.set("status", "paid");
                $app.dao().saveRecord(record);
            }

            return c.json(200, { "status": "success", "message": "Order updated to paid" });
        } catch (err) {
            return c.json(404, { "error": "Order not found" });
        }
    }

    return c.json(200, { "status": "ignored", "message": "Payment not complete" });
});
