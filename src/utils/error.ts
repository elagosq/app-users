import * as Sentry from "@sentry/react-native";

Sentry.init({
	dsn: "https://e5fe02d6a58c225c6dd64c640257dce3@o4508119138304000.ingest.us.sentry.io/4508119164583936",
	// Set tracesSampleRate to 1.0 to capture 100% of transactions for tracing.
	// We recommend adjusting this value in production.
	tracesSampleRate: 1.0,
	_experiments: {
		// profilesSampleRate is relative to tracesSampleRate.
		// Here, we'll capture profiles for 100% of transactions.
		profilesSampleRate: 1.0,
	},
});

export { Sentry }