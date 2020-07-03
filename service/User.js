export function isUserAllowed(userId, permissionId) {
  if (!userId || !permissionId) {
      return new Error('userId or permissionId is not defined, expected 2 arguments');
  }

  // Fetch the User record from Db
  // Fetch the Roles associate from the UserRole table
  // Retrieve the permissions associated with the Role object
  // Validate the `permissionId` coming in against the set of permissions and return teh result (true|false)
}