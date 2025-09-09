import { TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { TranslatePipe, TranslateService, TranslateStore, TranslateLoader, TranslateCompiler, TranslateParser, MissingTranslationHandler, USE_DEFAULT_LANG, ISOLATE_TRANSLATE_SERVICE, USE_EXTEND, DEFAULT_LANGUAGE } from '@ngx-translate/core';
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

describe('FooterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent, RouterLink, TranslatePipe],
      providers: [
        TranslateService,
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

  it('should create the footer', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    const footer = fixture.componentInstance;
    expect(footer).toBeTruthy();
  });

  it('should have currentYear set', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    const footer = fixture.componentInstance;
    expect(footer.currentYear).toBe(new Date().getFullYear());
  });
});
