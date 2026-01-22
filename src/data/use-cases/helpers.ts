export function getStatusClass(status: 'online' | 'offline' | 'busy' | 'error'): string {
  switch (status) {
    case 'online':
      return 'bg-status-success-06';
    case 'offline':
      return 'bg-tone-neutral-06';
    case 'busy':
      return 'bg-status-error-06';
    case 'error':
      return 'bg-tone-neutral-07';
    default:
      return 'bg-tone-neutral-03';
  }
}
