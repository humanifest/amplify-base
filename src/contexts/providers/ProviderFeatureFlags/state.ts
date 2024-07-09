export default function initFeatureFlagState() {
  return {
    showTestEffects: import.meta.env.DEV,
    showDevOpts: import.meta.env.DEV,
  };
}
