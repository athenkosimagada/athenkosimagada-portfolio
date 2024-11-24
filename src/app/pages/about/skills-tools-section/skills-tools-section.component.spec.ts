import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsToolsSectionComponent } from './skills-tools-section.component';

describe('SkillsToolsSectionComponent', () => {
  let component: SkillsToolsSectionComponent;
  let fixture: ComponentFixture<SkillsToolsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsToolsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsToolsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
