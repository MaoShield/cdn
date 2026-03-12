(function() {
    const el = document.getElementById('ms');
    const data = el ? el.dataset : {};
    const reason = data.reason ? decodeURIComponent(data.reason.replace(/\+/g, ' ')) : "";

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MaoShield - 403</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: #1a1a1a;
            color: #e7e7e7;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            -webkit-font-smoothing: antialiased;
        }

        .page {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 48px;
            padding: 20px;
        }

        .error {
            display: flex;
            align-items: center;
            gap: 32px;
        }

        .error-code {
            font-size: 96px;
            font-weight: 700;
            letter-spacing: -4px;
            line-height: 1;
            color: #DB3954;
        }

        .error-separator {
            width: 1px;
            height: 64px;
            background-color: rgba(255, 255, 255, 0.06);
        }

        .error-text {
            display: flex;
            flex-direction: column;
            gap: 6px;
            max-width: 380px;
        }

        .error-title {
            font-size: 18px;
            font-weight: 500;
            color: #e7e7e7;
        }

        .error-desc {
            font-size: 14px;
            color: #777;
            line-height: 1.4;
        }

        .error-reason {
            margin-top: 4px;
            font-size: 13px;
            color: #555;
            line-height: 1.5;
        }

        .error-reason span {
            color: #ccc;
        }

        .footer {
            font-size: 12px;
            color: #444;
            letter-spacing: 0.3px;
        }

        .footer a {
            color: #DB3954;
            text-decoration: none;
        }

        @media (max-width: 540px) {
            .error {
                flex-direction: column;
                text-align: center;
                gap: 16px;
            }
            .error-separator {
                width: 40px;
                height: 1px;
            }
            .error-code {
                font-size: 72px;
            }
        }
    </style>
</head>
<body>
    <div class="page">
        <div class="error">
            <div class="error-code">403</div>
            <div class="error-separator"></div>
            <div class="error-text">
                <div class="error-title">Access Denied</div>
                <div class="error-desc">Your request has been blocked by security rules.</div>
                <div class="error-reason">Reason: <span>${reason}</span></div>
            </div>
        </div>

        <div class="footer">Protected by <a href="#">MaoShield</a></div>
    </div>
</body>
</html>`;

    document.open();
    document.write(html);
    document.close();
})();
