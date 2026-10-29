import { useEffect } from 'react';

/**
 * Warns the user before closing/reloading the tab or leaving the page
 * while there are unsaved changes (RC-010).
 */
export const useUnsavedChangesWarning = (isDirty) => {
  useEffect(() => {
    if (!isDirty) return undefined;
    const handler = (e) => {
      e.preventDefault();
      e.returnValue = '';
      return '';
    };
    window.addEventListener('beforeunload', handler);
    return () => window.removeEventListener('beforeunload', handler);
  }, [isDirty]);
};
