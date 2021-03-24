import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarredGitComponent } from './starred-git.component';

describe('StarredGitComponent', () => {
  let component: StarredGitComponent;
  let fixture: ComponentFixture<StarredGitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarredGitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarredGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
