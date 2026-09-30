// ============================================================
// ToastContext — Re-export from Toast component
// ------------------------------------------------------------
// This file exists so all React contexts live under @contexts/*.
// The actual provider + hook are implemented in:
//   @components/common/Toast
// ============================================================

export {
  ToastProvider,
  useToast,
  type ToastType,
} from "@components/common/Toast";