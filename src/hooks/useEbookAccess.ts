import { useState, useCallback } from "react";

const STORAGE_KEY = "ebook_access";

interface EbookAccess {
  name: string;
  email: string;
  date: string;
}

export function useEbookAccess() {
  const [hasAccess, setHasAccess] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored !== null;
    } catch {
      return false;
    }
  });

  const grantAccess = useCallback((name: string, email: string) => {
    const data: EbookAccess = { name, email, date: new Date().toISOString() };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // Si localStorage falla, igual damos acceso en esta sesión
    }
    setHasAccess(true);
  }, []);

  return { hasAccess, grantAccess };
}
