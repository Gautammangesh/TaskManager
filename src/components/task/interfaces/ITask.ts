import { ITaskDescription } from './ITaskDescription';
import { ITaskHeader } from './ITaskHeader';
import { ITaskFooter } from './ITaskFooter';

export interface ITask
  extends ITaskHeader,
    ITaskDescription,
    ITaskFooter {
  priority?: string;
}
