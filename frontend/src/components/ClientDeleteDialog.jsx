export function ClientDeleteDialog() {
  return (
    <div>
      <p>Are you sure to delete this client?</p>
      <button>Cancel</button>
      <button type="submit" className="btn-primary" >Delete Client</button>
    </div>
  );
}
