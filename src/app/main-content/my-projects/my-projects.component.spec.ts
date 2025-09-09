import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyProjectsComponent } from './my-projects.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { TranslatePipe, TranslateService, TranslateStore, TranslateLoader, TranslateCompiler, TranslateParser, MissingTranslationHandler, USE_DEFAULT_LANG, ISOLATE_TRANSLATE_SERVICE, USE_EXTEND, DEFAULT_LANGUAGE } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

class FakeLoader {
  getTranslation(lang: string) {
    return of({});
  }
}

class FakeParser {
  interpolate(expr: string, params?: any) {
    return expr;
  }
  getValue(target: any, key: string) {
    return '';
  }
}

class FakeMissingTranslationHandler {
  handle(params: any) {
    return '';
  }
}

describe('MyProjectsComponent', () => {
  let component: MyProjectsComponent;
  let fixture: ComponentFixture<MyProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyProjectsComponent, CommonModule, RouterOutlet, TranslatePipe],
      providers: [
        { provide: HttpClient, useValue: {} },
        TranslateService,
        TranslateStore,
        { provide: TranslateLoader, useClass: FakeLoader },
        { provide: TranslateCompiler, useValue: {} },
        { provide: TranslateParser, useClass: FakeParser },
        { provide: MissingTranslationHandler, useClass: FakeMissingTranslationHandler },
        { provide: USE_DEFAULT_LANG, useValue: true },
        { provide: ISOLATE_TRANSLATE_SERVICE, useValue: false },
        { provide: USE_EXTEND, useValue: false },
        { provide: DEFAULT_LANGUAGE, useValue: 'de' },
        { provide: ActivatedRoute, useValue: {} }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
