const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { NodeSDK } = require('@opentelemetry/sdk-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-proto');

let oTelSdk;
if (process.env.OTEL_EXPORTER_OTLP_ENDPOINT) {
  oTelSdk = new NodeSDK({
    // Leverages the data export configuration set in environment variables.
    traceExporter:  new OTLPTraceExporter(),
    serviceName: 'streaming',
    instrumentations: [getNodeAutoInstrumentations()],
  });

  oTelSdk.start();
}
