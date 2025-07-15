import * as React from "react";
import GeneralProductsPage from "src/templates/GeneralProductsPage";

const index = () => {
  return (
    <GeneralProductsPage>
      <div className="accounting-top__body">
        <section className="accounting-top__kv">
          <div className="accounting-top__kv__inner">
            <div className="accounting-top__kv__wrap">
              <div className="accounting-top__kv__group">
                <div className="accounting-top__kv__heading">
                  <p className="accounting-top__kv__heading__text">
                    シェアNo.1の会計ソフトfreee会計
                  </p>
                  <h1 className="accounting-top__kv__heading__title">
                    会計業務を、
                    <br />
                    <span>誰でも、</span>
                    <br />
                    流れるように。
                  </h1>
                </div>
                <p className="accounting-top__kv__text">
                  freee会計では、請求・支払業務から
                  <br />
                  会計帳簿・決算書の作成、経営管理まで、
                  <br />
                  業務が一つに繋がり、経理をスムーズに効率化します。
                </p>
                <div className="accounting-top__kv__button">
                  <button className="is-primary show-signup-modal">
                    <span>クレジットカード登録不要</span> 無料で始める
                  </button>
                  <a href="/accounting/resources/01/" className="is-download">
                    <span>freee会計がすぐにわかる</span> 資料ダウンロード
                  </a>
                </div>
                <div className="accounting-top__kv__award"></div>
              </div>
              <p className="accounting-top__kv__tips">
                ※1
                リードプラス「キーワードからひも解く業界分析シリーズ：クラウド会計ソフト編」（2022年8月）
                <br />
                ※2 2024年3月末時点。有料課金ユーザー企業数には個人事業主を含む
              </p>
            </div>
          </div>
        </section>

        <section className="ab-accounting-top__select test-a">
          <div className="accounting-top__select__inner">
            <div className="accounting-top__select__heading">
              <span className="accounting-top__select__heading__wrap">
                <p className="accounting-top__select__heading__text">
                  さまざまな企業フェーズに対応
                </p>
                <h2 className="accounting-top__select__heading__title">
                  あなたの
                  <span>
                    <span>企業の状況</span>
                  </span>
                  を<br />
                  お選びください
                </h2>
                <p className="ab-accounting-top__select__text">
                  1人から300人以上まであらゆる企業の会計を効率よく行えます
                </p>
              </span>
            </div>
            <div className="accounting-top__select__anchor">
              <a href="#select-new-corporation">
                <span>
                  起業したての
                  <br />
                  法人向け
                </span>
              </a>
              <a href="#select-smb">
                <span>小〜中小企業向け</span>
              </a>
              <a href="#select-mm">
                <span>
                  エンタープライズ
                  <br />
                  企業向け
                </span>
              </a>
            </div>
            <div className="ab-accounting-top__select__wrap">
              <div
                className="ab-accounting-top__select__card card-1"
                id="select-new-corporation"
              >
                <a href="/accounting/new-corporation/">
                  <p className="ab-accounting-top__select__card__count">
                    <span>1-</span>
                  </p>
                  <div className="ab-accounting-top__select__card__body">
                    <div className="ab-accounting-top__select__card__wrap">
                      <p className="ab-accounting-top__select__card__text">
                        初めて会計業務を行う
                      </p>
                      <h3 className="ab-accounting-top__select__card__title">
                        はじめて法人<span>(1年目)</span>
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="ab-accounting-top__select__card card-2"
                id="select-smb"
              >
                <a href="/accounting/small-medium/">
                  <p className="ab-accounting-top__select__card__count">
                    <span>1-300</span>
                  </p>
                  <div className="ab-accounting-top__select__card__body">
                    <div className="ab-accounting-top__select__card__wrap">
                      <p className="ab-accounting-top__select__card__text">
                        経理業務をラクにしたい
                      </p>
                      <h3 className="ab-accounting-top__select__card__title">
                        小〜中小企業
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="ab-accounting-top__select__card card-3"
                id="select-mm"
              >
                <a href="/accounting/mm/">
                  <p className="ab-accounting-top__select__card__count">
                    <span>300+</span>
                  </p>
                  <div className="ab-accounting-top__select__card__body">
                    <div className="ab-accounting-top__select__card__wrap">
                      <p className="ab-accounting-top__select__card__text">
                        内部統制・IPOに完全対応
                      </p>
                      <h3 className="ab-accounting-top__select__card__title">
                        エンタープライズ
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <a
              href="/accounting/individual/"
              className="accounting-top__select__button"
            >
              個人事業主の方はこちら
            </a>
            <div className="accounting-top__select__link">
              <a
                className="c-link c-link-underline"
                href="/solution/it-hojokin/"
              >
                IT導入補助金を検討中の方はこちら
              </a>
            </div>
          </div>
        </section>

        <section className="accounting-top__simulator">
          <div className="accounting-top__simulator__inner">
            <h2 className="accounting-top__simulator__title">
              おすすめのコンテンツを
              <br />
              <span>ご案内</span>します
            </h2>
            <p className="accounting-top__simulator__text">
              2つの選択肢の組み合わせで、
              <br />
              あなたに合ったコンテンツを表示します
            </p>
            <div className="accounting-top__simulator__wrap">
              <div className="accounting-top__simulator__box">
                <div className="accounting-top__simulator__box__text">
                  <span>わたしは</span>
                  <span className="accounting-top__simulator__box__select">
                    <select id="js-select-who">
                      <option value="">【選択してください】</option>
                    </select>
                  </span>
                  <span>で、お金の管理を</span>
                  <span className="accounting-top__simulator__box__select">
                    <select id="js-select-do">
                      <option value="">【選択してください】</option>
                    </select>
                  </span>
                  <span>したい</span>
                </div>
                <div className="accounting-top__simulator__box__list">
                  <div
                    className="accounting-top__simulator__box__list__empty"
                    id="js-select-empty"
                  >
                    <p className="accounting-top__simulator__box__list__empty__text">
                      あなたにあった情報を
                      <br />
                      表示します
                    </p>
                  </div>
                  <div
                    className="accounting-top__simulator__box__feature"
                    id="js-select-feature"
                  >
                    <h3 className="accounting-top__simulator__box__feature__title">
                      あなたへのイチオシ機能
                    </h3>
                    <div className="accounting-top__simulator__box__feature__container">
                      <div
                        className="accounting-top__simulator__box__feature__wrap"
                        id="js-select-feature-result"
                      >
                        {/* <div className="accounting-top__simulator__box__feature__item">
                        <span>
                          <img src="" className="accounting-top__simulator__box__feature__item__image" alt="" />
                          <div className="accounting-top__simulator__box__feature__item__wrap">
                            <h4 className="accounting-top__simulator__box__feature__item__title">
                              ネット環境があれば、どこでもどの端末でも
                            </h4>
                            <p className="accounting-top__simulator__box__feature__item__text">
                              クラウドで、場所や環境問わず、複数での同時利用も可能
                            </p>
                          </div>
                        </span>
                      </div> */}
                      </div>
                    </div>
                    <div
                      className="accounting-top__simulator__box__feature__button"
                      id="js-select-feature-buttons"
                    >
                      {/* <a href="#" className="is-primary is-large">
                        詳細はこちら
                      </a> */}
                    </div>
                  </div>
                  <div
                    className="accounting-top__simulator__box__feature"
                    id="js-select-content"
                  >
                    <h3 className="accounting-top__simulator__box__feature__title">
                      おすすめコンテンツ・サービス
                    </h3>
                    <div className="accounting-top__simulator__box__feature__container">
                      <div
                        className="accounting-top__simulator__box__feature__wrap"
                        id="js-select-content-result"
                      >
                        {/* <div className="accounting-top__simulator__box__feature__item">
                        <a href="#">
                          <img src="" className="accounting-top__simulator__box__feature__item__image" alt="" />
                          <div className="accounting-top__simulator__box__feature__item__wrap">
                            <h4 className="accounting-top__simulator__box__feature__item__title">
                              ネット環境があれば、どこでもどの端末でも
                            </h4>
                            <p className="accounting-top__simulator__box__feature__item__text">
                              クラウドで、場所や環境問わず、複数での同時利用も可能
                            </p>
                            <p className="accounting-top__simulator__box__feature__item__link">詳しくはこちら</p>
                          </div>
                        </a>
                      </div> */}
                      </div>
                    </div>
                    <div
                      className="accounting-top__simulator__box__feature__button"
                      id="js-select-content-buttons"
                    >
                      {/* <div className="accounting-top__simulator__box__feature__button__wrap">
                        <a href={SIGN_UP_URL.ACCOUNTING.ROOT} className="is-primary">
                          無料で使ってみる
                        </a>
                        <p className="accounting-top__simulator__box__feature__button__tips">
                          ＊自動でお支払いが発生することはありません。
                        </p>
                      </div>
                      <a href="#" className="is-secondary">
                        料金プランを詳しくみる
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </GeneralProductsPage>
  );
};

export default index;
