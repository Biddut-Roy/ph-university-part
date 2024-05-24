export type TUser = {
  id: string;
  password: string;
  needsPasswordChanges: boolean;
  role: 'admin' | 'student' | 'faculty';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};
