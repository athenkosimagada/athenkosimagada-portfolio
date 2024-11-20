import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsToolsComponent } from './skills-tools.component';

describe('SkillsToolsComponent', () => {
  let component: SkillsToolsComponent;
  let fixture: ComponentFixture<SkillsToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsToolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
