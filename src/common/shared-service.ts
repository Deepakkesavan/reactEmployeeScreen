export function getSubModuleUrlFromStorage(
    moduleKey: string,
    subModuleKey: string
  ): string {
    const stored = sessionStorage.getItem('module-config');
  
    if (!stored) {
      throw new Error('No module-config found in sessionStorage');
    }
  
    const parsed = JSON.parse(stored);
  
    if (!parsed?.modules || !Array.isArray(parsed.modules)) {
      throw new Error('Invalid module-config structure');
    }
  
    const module = parsed.modules.find((m: any) => m.key === moduleKey);
  
    if (!module) {
      throw new Error(`Module "${moduleKey}" not found`);
    }
  
    if (!module.subModules || !Array.isArray(module.subModules)) {
      throw new Error(`No submodules found for module "${moduleKey}"`);
    }
  
    const subModule = module.subModules.find(
      (sm: any) => sm.key === subModuleKey
    );
  
    if (!subModule) {
      throw new Error(
        `Submodule "${subModuleKey}" not found in module "${moduleKey}"`
      );
    }
  
    if (!subModule.remoteEntry) {
      throw new Error(`RemoteEntry not defined for submodule "${subModuleKey}"`);
    }
  
    return subModule.remoteEntry;
  }