import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { TranslateService, TranslatePipe, TranslateStore, TranslateLoader, TranslateCompiler, TranslateParser, MissingTranslationHandler, USE_DEFAULT_LANG, ISOLATE_TRANSLATE_SERVICE, USE_EXTEND, DEFAULT_LANGUAGE } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
class FakeMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: any) { return ''; }
}
class FakeParser implements TranslateParser {
  interpolate(expr: string | Function, params?: any): string { return expr as string; }
  flatten(object: any): any { return object; }
}
class FakeCompiler implements TranslateCompiler {
  compile(value: any, lang: string) { return value; }
  compileTranslations(translations: any, lang: string) { return translations; }
}
import { of } from 'rxjs';

class FakeLoader implements TranslateLoader {
  getTranslation(lang: string) {
    return of({});
  }
}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, FooterComponent, TranslatePipe],
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

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have title "Portfolio"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Portfolio');
  });
});
