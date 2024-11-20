import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillToolComponent } from './skill-tool.component';

describe('SkillToolComponent', () => {
  let component: SkillToolComponent;
  let fixture: ComponentFixture<SkillToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
