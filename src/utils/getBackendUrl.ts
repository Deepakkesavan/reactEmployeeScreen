export const getBackendUrl = (
  mainKey: string,
  subKey: string
): string | undefined => {
  const stored = sessionStorage.getItem("module-config");
  if (!stored) {
    console.warn("getBackendUrl: No module-config found in sessionStorage");
    return undefined;
  }

  const config = JSON.parse(stored);
  const mainModule = config.modules?.find((m: any) => m.key === mainKey);

  if (!mainModule) {
    console.warn(
      `getBackendUrl: Main module "${mainKey}" not found in config`,
      config
    );
    return undefined;
  }

  const subModule = mainModule.subModules?.find((s: any) => s.key === subKey);

  if (!subModule) {
    console.warn(
      `getBackendUrl: Submodule "${subKey}" not found in module "${mainKey}"`,
      mainModule
    );
    return undefined;
  }

  return subModule.url;
};
