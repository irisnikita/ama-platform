/**
 * @fileoverview Exposes global helper utilities for Zalo Mini App.
 * Includes navigation and native storage operations, intended for external script usage.
 */

import { nativeStorage } from "zmp-sdk/apis";
import { MESSAGE_TYPE } from "@/constants";

/**
 * A utility object that provides common Zalo Mini App operations.
 */
const zma = {
  /**
   * Sends a navigation request to the host environment.
   *
   * @param {string} path - The relative path to navigate to within the Mini App.
   * @param {Record<string, unknown>} [options={}] - Optional parameters for the navigation.
   *
   * @example
   * window.zma.navigate('/profile', { from: 'home' });
   */
  navigate(path: string, options: Record<string, unknown> = {}): void {
    window.postMessage(
      {
        type: MESSAGE_TYPE.NAVIGATE,
        data: { path, options },
      },
      window.location.origin
    );
  },

  /**
   * Stores a key-value pair in the native storage.
   *
   * @param {string} key - The key to associate with the value.
   * @param {string} value - The value to store.
   *
   * @example
   * window.zma.setItem('user-token', 'abc123');
   */
  setItem(key: string, value: string): void {
    nativeStorage.setItem(key, value);
  },

  /**
   * Retrieves a value from the native storage by its key.
   *
   * @param {string} key - The key whose value should be retrieved.
   * @returns {string | null} The stored value, or `null` if not found.
   *
   * @example
   * const token = window.zma.getItem('user-token');
   */
  getItem(key: string): string | null {
    return nativeStorage.getItem(key);
  },

  /**
   * Removes a key-value pair from the native storage.
   *
   * @param {string} key - The key to be removed.
   *
   * @example
   * window.zma.removeItem('user-token');
   */
  removeItem(key: string): void {
    nativeStorage.removeItem(key);
  },

  /**
   * Clears all stored key-value pairs from the native storage.
   *
   * @example
   * window.zma.clearNativeStorage();
   */
  clearNativeStorage(): void {
    nativeStorage.clear();
  },
};

/**
 * Initializes and attaches the `zma` global object to `window` in a safe manner.
 */
export function initializeZmaGlobals(): void {
  if (!window.zma) {
    Object.defineProperty(window, "zma", {
      value: zma,
      writable: false,
      configurable: false,
    });
  }
}

// Extend the global type definition
declare global {
  interface Window {
    zma: typeof zma;
  }
}
