export function getStatusClass(status: 'online' | 'offline' | 'busy' | 'error'): string {
  switch (status) {
    case 'online':
      return 'bg-success-emphasis';
    case 'offline':
      return 'bg-neutral-border';
    case 'busy':
      return 'bg-danger-emphasis';
    case 'error':
      return 'bg-border-default';
    default:
      return 'bg-surface-inverse-muted';
  }
}
