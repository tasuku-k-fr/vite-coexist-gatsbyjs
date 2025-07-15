import * as React from "react";

const index = () => {
  return (
    <div className="fr-3ezzk7z2_container">
      <div className="kv-carousel fr-3ezzk7z2_kv_wrap kv u-display-none-md">
        <div className="swiper-wrapper">
          <div className="swiper-slide kvslide1">
            <div className="kv_wrap">
              <div className="l-grid u-alignItems-center l-grid-vreverse-md l-gapVertSmall-md">
                <div className="l-grid_item l-grid_item-12-md u-mt-x0_5-md">
                  <p className="kv-label u-tc-p5 u-fw-bold">法人向けdesu</p>
                  <p className="u-ts-xlarge u-fw-medium">
                    自動化・可視化を実現する
                  </p>
                  <h2 className="kv_title u-ts-lv3 u-fw-bold">
                    統合型
                    <span style={{ color: "#2964F0" }}>クラウド会計ソフト</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide kvslide-individual"></div>
          <div className="swiper-slide kvslide3">
            <div className="kv_wrap">
              <div className="l-grid u-alignItems-center l-grid-vreverse-md l-gapVertSmall-md">
                <div className="l-grid_item l-grid_item-12-md u-mt-x0_5-md">
                  <h2 className="kv_title u-ts-lv3 u-fw-medium u-mb-x3">
                    すべてのスモールビジネスを支える
                    <br />
                    <span className="u-fw-bold" style={{ color: "#2964F0" }}>
                      統合型経営プラットフォーム
                    </span>
                  </h2>
                  <p className="u-tc-gy7">
                    freeeの統合型は、従来バラバラに存在していた業務やデータを、フロン
                    <br />
                    トオフィスからバックオフィスまで一気通貫させ、スモールビジネスが
                    <br />
                    専門家や取引先とつながるプラットフォームになります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="kv-swiper-button-group u-display-none">
          <div className="c-carousel_arrow c-carousel_arrow-prev swiper-button-prev" />
          <div className="c-carousel_arrow c-carousel_arrow-next swiper-button-next" />
        </div>

        <div className="kv-swiper-pagination"></div>
        {/* <button
            className="personal-business-topics__kv-slider__control"
            id="js-autoplay-button"
            aria-label="自動スライドを一時停止"
          >
            <img src="/personal-business-topics/pause.svg" alt="一時停止アイコン" />
          </button> */}
      </div>

      <div className="fr-3ezzk7z2_kv_wrap u-display-none-md-imp">
        <div className="fr-3ezzk7z2_kv_card">
          <h3 className="fr-3ezzk7z2_kv_card_title">
            <span>法人</span>の<br />
            お客さまへ
          </h3>
          <p className="fr-3ezzk7z2_kv_card_text">
            はじめての方でも、忙しくて手間をかけたくない方でも、
            <br />
            freeeなら簡単に経理・決算が行えます
          </p>
        </div>
        <div className="fr-3ezzk7z2_kv_card">
          <h3 className="fr-3ezzk7z2_kv_card_title">
            <span>個人</span>事業主の
            <br />
            お客さまへ
          </h3>
          <p className="fr-3ezzk7z2_kv_card_text">
            はじめてでもカンタン
            <br />
            確定申告がサクッとできます
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
