import { vi } from 'vitest';

export const useTheme = vi.fn().mockReturnValue({
  isDarkMode: false,
  toggleTheme: vi.fn(),
});
