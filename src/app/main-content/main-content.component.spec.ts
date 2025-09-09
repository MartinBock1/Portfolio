/// <reference types="jasmine" />
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MainContentComponent } from './main-content.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslatePipe, TranslateService, TranslateStore, TranslateLoader, TranslateCompiler, TranslateParser, MissingTranslationHandler, USE_DEFAULT_LANG, ISOLATE_TRANSLATE_SERVICE, USE_EXTEND, DEFAULT_LANGUAGE } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

class FakeLoader implements TranslateLoader {
  getTranslation(lang: string) {
    return of({});
  }
}
class FakeCompiler implements TranslateCompiler {
  compile(value: any, lang: string) { return value; }
  compileTranslations(translations: any, lang: string) { return translations; }
}
class FakeParser implements TranslateParser {
  interpolate(expr: string | Function, params?: any): string { return expr as string; }
  flatten(object: any): any { return object; }
}
class FakeMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: any) { return ''; }
}

describe('MainContentComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainContentComponent, CommonModule, RouterOutlet, TranslatePipe],
      providers: [
          { provide: HttpClient, useValue: {} },
        TranslateStore,
        { provide: TranslateLoader, useClass: FakeLoader },
        { provide: TranslateCompiler, useClass: FakeCompiler },
        { provide: TranslateParser, useClass: FakeParser },
        { provide: MissingTranslationHandler, useClass: FakeMissingTranslationHandler },
        { provide: USE_DEFAULT_LANG, useValue: true },
        { provide: ISOLATE_TRANSLATE_SERVICE, useValue: false },
        { provide: USE_EXTEND, useValue: false },
        { provide: DEFAULT_LANGUAGE, useValue: 'en' },
        { provide: ActivatedRoute, useValue: {} }
      ]
    }).compileComponents();
  });

  it('should create the main content', () => {
    const fixture = TestBed.createComponent(MainContentComponent);
    const mainContent = fixture.componentInstance;
    expect(mainContent).toBeTruthy();
  });
});
