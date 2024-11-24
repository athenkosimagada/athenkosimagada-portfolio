import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsToolsListComponent } from './skills-tools-list.component';

describe('SkillsToolsListComponent', () => {
  let component: SkillsToolsListComponent;
  let fixture: ComponentFixture<SkillsToolsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsToolsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsToolsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
