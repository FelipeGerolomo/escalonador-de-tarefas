import { TestBed, inject } from '@angular/core/testing';

import { TaskSchedulerService } from './task-scheduler.service';

describe('TaskSchedulerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskSchedulerService]
    });
  });

  it('should be created', inject([TaskSchedulerService], (service: TaskSchedulerService) => {
    expect(service).toBeTruthy();
  }));
});
