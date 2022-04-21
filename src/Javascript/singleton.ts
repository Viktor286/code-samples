// 1. Bypass new attempts to create new instances
class MyClass {
  private static _instance: MyClass | undefined;

  constructor(...args: any[]) {
    if (!MyClass._instance) {
      MyClass._instance = new MyClass(...args);
    }

    return MyClass._instance;
  }
}

// 2. Turn off "new" keyword functionality
class Settings {
  static instance: Settings;

  private constructor() {
    // pass
  }

  static getInstance(): Settings {
    if (!Settings.instance) {
      Settings.instance = new Settings();
    }

    return Settings.instance;
  }
}

// Usage
const settings = Settings.getInstance();
