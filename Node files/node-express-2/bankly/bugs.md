BUG #1: authUser() decodes instead of verifying

BUG #2: no schema validataion, add schemas folder and files, not sure if bug but good to have

BUG #3: auth/login does not await User.authenticate

BUG #4: the delete function in users/username does not await results

BUG #5: auth/login does not check username and password are both submitted

BUG #6; the patch function in users/username does not allow user to update self, requireAdmin restricts that
