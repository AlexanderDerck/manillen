export function props<P>() {
  return (payload: P) => ({ payload });
};