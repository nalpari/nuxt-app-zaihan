<script setup lang="ts">
// definePageMeta({
//   layout: 'boarder',
// })

onMounted(() => {
  /**
   * 메뉴api 호출해서 store에 저장
   * 이미 저장되어 있으면 skip
   */
  // if (!useMenu.getChk) useMenu.getMenus()

  const swiperBanner = new Swiper('.visual-section', {
    loop: true,
    autoplay: { delay: 5000 },
    pagination: {
      el: '.visual-section .swiper-pagination',
      type: 'fraction',
    },
  })

  const quickMenu = new Swiper('.quick-menu', {
    slidesPerView: 4,
    grid: { rows: 2 },
    slidesPerGroup: 8,
    scrollbar: { el: '.quick-menu .swiper-scrollbar' },
  })

  const swiperCardA = new Swiper('.best-info-wrap .card-wrap', {
    slidesPerView: 2.2,
    spaceBetween: 16,
    breakpoints: {
      400: { slidesPerView: 3.2 },
      640: { slidesPerView: 4.2 },
      900: { slidesPerView: 3 },
    },
    navigation: {
      nextEl: '.best-info-wrap .swiper-button-next',
      prevEl: '.best-info-wrap .swiper-button-prev',
    },
  })

  const swiperCardB = new Swiper('.moment-info-wrap .card-wrap', {
    slidesPerView: 1.8,
    spaceBetween: 16,
    breakpoints: {
      400: { slidesPerView: 2.8 },
      640: { slidesPerView: 3.8 },
      900: { slidesPerView: 2 },
    },
    navigation: {
      nextEl: '.moment-info-wrap .swiper-button-next',
      prevEl: '.moment-info-wrap .swiper-button-prev',
    },
  })
})
</script>

<template>
  <div class="contents">
    <div class="main-page-wrap">
      <section class="visual-section">
        <ul class="swiper-wrapper">
          <li class="swiper-slide">
            <a href="#0">
              <img class="view-mb" src="/images/temp/temp_banner_mb.jpg" alt="" />
              <img class="view-pc" src="/images/temp/temp_banner_pc.png" alt="" />
            </a>
          </li>
          <li class="swiper-slide">
            <img class="view-mb" src="/images/temp/temp_banner_mb.jpg" alt="" />
            <img class="view-pc" src="/images/temp/temp_banner_pc.png" alt="" />
          </li>
          <li class="swiper-slide">
            <img class="view-mb" src="/images/temp/temp_banner_mb.jpg" alt="" />
            <img class="view-pc" src="/images/temp/temp_banner_pc.png" alt="" />
          </li>
        </ul>
        <div class="fix-right">
          <button type="button" class="btn-autoplay">일시정지/재생</button>
          <div class="swiper-pagination"></div>
        </div>
      </section>

      <section class="quick-menu view-mb">
        <ul class="swiper-wrapper">
          <li class="swiper-slide">
            <a href="#0">
              <img src="/images/menu/menu_info.png" alt="" />
              재한정보
            </a>
          </li>
          <li class="swiper-slide">
            <a href="#0">
              <img src="/images/menu/menu_restaurant.png" alt="" />
              업체&맛집
            </a>
          </li>
          <li class="swiper-slide">
            <a href="#0">
              <img src="/images/menu/menu_job.png" alt="" />
              구인/구직
            </a>
          </li>
          <li class="swiper-slide">
            <a href="#0">
              <img src="/images/menu/menu_ad.png" alt="" />
              자유게시/광고
            </a>
          </li>
          <li class="swiper-slide">
            <a href="#0">
              <img src="/images/menu/menu_market.png" alt="" />
              벼룩시장
            </a>
          </li>
          <li class="swiper-slide">
            <a href="#0">
              <img src="/images/menu/menu_estate.png" alt="" />
              부동산
            </a>
          </li>
          <li class="swiper-slide">
            <a href="#0">
              <img src="/images/menu/menu_moment.png" alt="" />
              모멘트
            </a>
          </li>
          <li class="swiper-slide">
            <a href="#0">
              <img src="/images/menu/menu_notice.png" alt="" />
              공지사항
            </a>
          </li>
          <li class="swiper-slide">
            <a href="#0">
              <img src="/images/menu/menu_info.png" alt="" />
              재한정보02
            </a>
          </li>
          <li class="swiper-slide">
            <a href="#0">
              <img src="/images/menu/menu_info.png" alt="" />
              업체&맛집02
            </a>
          </li>
          <li class="swiper-slide">
            <a href="#0">
              <img src="/images/menu/menu_info.png" alt="" />
              구인/구직02
            </a>
          </li>
        </ul>
        <div class="swiper-scrollbar"></div>
      </section>

      <section class="rate-page-wrap view-mb">
        <a href="#0" class="rate-info">
          <div class="switch-area">
            <div class="ch-rate">
              <p class="color-gray">CNY</p>
              <p class="won">元 1</p>
            </div>
            <button type="button" class="btn-switch"></button>
            <div class="ko-rate">
              <p class="color-gray">KRW</p>
              <p class="won">195.46 원</p>
            </div>
            <span class="rate-date">2022.04.08 16:00</span>
          </div>
        </a>
      </section>

      <section class="page-section zaihan-info">
        <h4 class="main-title">재한들의 따끈따끈한 정보</h4>
        <ul class="list-wrap">
          <li>
            <a href="#0">
              <div class="text-box">
                <span class="flag-info">재한정보</span>
                <h4 class="list-title">외국국적동포 해외 범죄경력증명서 등 업무처리 말줄임 테스트 끝</h4>
                <p class="list-text">
                  외국국적동포 업무 관련 건의사항 등을 반영하여 해외범죄 경력 증명 서류관련 세부기준 등 업무처리 기준을
                  일부 말줄임 테스트 끝
                </p>
              </div>
              <div class="list-info">
                <ul class="left">
                  <li>관리자</li>
                  <li>2022.04.01</li>
                </ul>
              </div>
            </a>
          </li>
          <li>
            <a href="#0">
              <div class="text-box">
                <span class="flag-ad">자유게시/광고</span>
                <h4 class="list-title">외국국적동포 해외 범죄경력증명서 등 업무처리 말줄임 테스트 끝</h4>
                <p class="list-text">
                  외국국적동포 업무 관련 건의사항 등을 반영하여 해외범죄 경력 증명 서류관련 세부기준 등 업무처리 기준을
                  일부 말줄임 테스트 끝
                </p>
              </div>
              <div class="list-info">
                <ul class="left">
                  <li>관리자</li>
                  <li>2022.04.01</li>
                </ul>
              </div>
            </a>
          </li>
          <li>
            <a href="#0">
              <div class="text-box">
                <span class="flag-estate">부동산</span>
                <h4 class="list-title">외국국적동포 해외 범죄경력증명서 등 업무처리 말줄임 테스트 끝</h4>
                <p class="list-text">
                  외국국적동포 업무 관련 건의사항 등을 반영하여 해외범죄 경력 증명 서류관련 세부기준 등 업무처리 기준을
                  일부 말줄임 테스트 끝
                </p>
              </div>
              <div class="list-info">
                <ul class="left">
                  <li>관리자</li>
                  <li>2022.04.01</li>
                </ul>
              </div>
            </a>
          </li>
          <li>
            <a href="#0">
              <div class="text-box">
                <span class="flag-job">구인/구직</span>
                <h4 class="list-title">외국국적동포 해외 범죄경력증명서 등 업무처리 말줄임 테스트 끝</h4>
                <p class="list-text">
                  외국국적동포 업무 관련 건의사항 등을 반영하여 해외범죄 경력 증명 서류관련 세부기준 등 업무처리 기준을
                  일부 말줄임 테스트 끝
                </p>
              </div>
              <div class="list-info">
                <ul class="left">
                  <li>관리자</li>
                  <li>2022.04.01</li>
                </ul>
              </div>
            </a>
          </li>
          <li>
            <a href="#0">
              <div class="text-box">
                <span class="flag-market">벼룩시장</span>
                <h4 class="list-title">외국국적동포 해외 범죄경력증명서 등 업무처리 말줄임 테스트 끝</h4>
                <p class="list-text">
                  외국국적동포 업무 관련 건의사항 등을 반영하여 해외범죄 경력 증명 서류관련 세부기준 등 업무처리 기준을
                  일부 말줄임 테스트 끝
                </p>
              </div>
              <div class="list-info">
                <ul class="left">
                  <li>관리자</li>
                  <li>2022.04.01</li>
                </ul>
              </div>
            </a>
          </li>
        </ul>
      </section>

      <section class="rate-page-wrap view-pc">
        <div class="rate-info">
          <div class="switch-area">
            <a href="#" class="ch-rate">
              <p class="color-gray">CNY</p>
              <p class="won">元 1</p>
            </a>
            <button type="button" class="btn-switch"></button>
            <a href="#" class="ko-rate">
              <p class="color-gray">KRW</p>
              <p class="won">195.46 원</p>
            </a>
            <span class="rate-date">2022.04.08 16:00</span>
          </div>
        </div>
      </section>

      <section class="page-section">
        <h4 class="main-title">재한들이 많이 보는 Best 정보</h4>
        <div class="best-info-wrap">
          <div class="card-wrap">
            <ul class="swiper-wrapper">
              <li class="swiper-slide">
                <a href="#0">
                  <div class="img-box">
                    <img src="/images/temp/thumbnail_01.jpg" alt="" />
                  </div>
                  <div class="text-box">
                    <span class="flag-info">재한정보</span>
                    <h4 class="card-title">외국국적동포 해외 범죄경력증명서 등 업무처리 말줄임 테스트 끝</h4>
                    <p class="card-text">
                      외국국적동포 업무 관련 건의사항 등을 반영하여 해외범죄 경력 증명 서류관련 세부기준 등 업무처리
                      기준을 일부 말줄임 테스트 끝
                    </p>
                  </div>
                  <ul class="card-info">
                    <li>관리자</li>
                    <li>2022.04.01</li>
                  </ul>
                </a>
              </li>
              <li class="swiper-slide">
                <a href="#0">
                  <div class="img-box">
                    <img src="/images/temp/thumbnail_01.jpg" alt="" />
                  </div>
                  <div class="text-box">
                    <span class="flag-info">재한정보</span>
                    <h4 class="card-title">외국국적동포 해외 범죄경력증명서 등 업무처리 말줄임 테스트 끝</h4>
                    <p class="card-text">
                      외국국적동포 업무 관련 건의사항 등을 반영하여 해외범죄 경력 증명 서류관련 세부기준 등 업무처리
                      기준을 일부 말줄임 테스트 끝
                    </p>
                  </div>
                  <ul class="card-info">
                    <li>관리자</li>
                    <li>2022.04.01</li>
                  </ul>
                </a>
              </li>
              <li class="swiper-slide">
                <a href="#0">
                  <div class="img-box">
                    <img src="/images/temp/thumbnail_01.jpg" alt="" />
                  </div>
                  <div class="text-box">
                    <span class="flag-info">재한정보</span>
                    <h4 class="card-title">외국국적동포 해외 범죄경력증명서 등 업무처리 말줄임 테스트 끝</h4>
                    <p class="card-text">
                      외국국적동포 업무 관련 건의사항 등을 반영하여 해외범죄 경력 증명 서류관련 세부기준 등 업무처리
                      기준을 일부 말줄임 테스트 끝
                    </p>
                  </div>
                  <ul class="card-info">
                    <li>관리자</li>
                    <li>2022.04.01</li>
                  </ul>
                </a>
              </li>
              <li class="swiper-slide">
                <a href="#0">
                  <div class="img-box">
                    <img src="/images/temp/thumbnail_01.jpg" alt="" />
                  </div>
                  <div class="text-box">
                    <span class="flag-info">재한정보</span>
                    <h4 class="card-title">외국국적동포 해외 범죄경력증명서 등 업무처리 말줄임 테스트 끝</h4>
                    <p class="card-text">
                      외국국적동포 업무 관련 건의사항 등을 반영하여 해외범죄 경력 증명 서류관련 세부기준 등 업무처리
                      기준을 일부 말줄임 테스트 끝
                    </p>
                  </div>
                  <ul class="card-info">
                    <li>관리자</li>
                    <li>2022.04.01</li>
                  </ul>
                </a>
              </li>
              <li class="swiper-slide">
                <a href="#0">
                  <div class="img-box">
                    <img src="/images/temp/thumbnail_01.jpg" alt="" />
                  </div>
                  <div class="text-box">
                    <span class="flag-info">재한정보</span>
                    <h4 class="card-title">외국국적동포 해외 범죄경력증명서 등 업무처리 말줄임 테스트 끝</h4>
                    <p class="card-text">
                      외국국적동포 업무 관련 건의사항 등을 반영하여 해외범죄 경력 증명 서류관련 세부기준 등 업무처리
                      기준을 일부 말줄임 테스트 끝
                    </p>
                  </div>
                  <ul class="card-info">
                    <li>관리자</li>
                    <li>2022.04.01</li>
                  </ul>
                </a>
              </li>
              <li class="swiper-slide">
                <a href="#0">
                  <div class="img-box">
                    <img src="/images/temp/thumbnail_01.jpg" alt="" />
                  </div>
                  <div class="text-box">
                    <span class="flag-info">재한정보</span>
                    <h4 class="card-title">외국국적동포 해외 범죄경력증명서 등 업무처리 말줄임 테스트 끝</h4>
                    <p class="card-text">
                      외국국적동포 업무 관련 건의사항 등을 반영하여 해외범죄 경력 증명 서류관련 세부기준 등 업무처리
                      기준을 일부 말줄임 테스트 끝
                    </p>
                  </div>
                  <ul class="card-info">
                    <li>관리자</li>
                    <li>2022.04.01</li>
                  </ul>
                </a>
              </li>
            </ul>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </div>

        <h4 class="main-title">재한들이 많이 찾는 업체&맛집 정보</h4>
        <ul class="list-wrap">
          <li>
            <a href="#0">
              <div class="text-box">
                <h4 class="list-title">외국국적동포 해외 범죄경력증명서 등 업무처리 말줄임 테스트 끝</h4>
                <p class="list-text">
                  외국국적동포 업무 관련 건의사항 등을 반영하여 해외범죄 경력 증명 서류관련 세부기준 등 업무처리 기준을
                  일부 말줄임 테스트 끝
                </p>
                <ul class="store-info">
                  <li><span class="rating">4.7</span> (28)</li>
                  <li class="color-dark">매일 11:00 - 21:30</li>
                </ul>
              </div>
              <div class="img-box">
                <img src="/images/temp/thumbnail_01.jpg" alt="" />
              </div>
            </a>
          </li>
          <li>
            <a href="#0">
              <div class="text-box">
                <h4 class="list-title">외국국적동포 해외 범죄경력증명서 등 업무처리 말줄임 테스트 끝</h4>
                <p class="list-text">
                  외국국적동포 업무 관련 건의사항 등을 반영하여 해외범죄 경력 증명 서류관련 세부기준 등 업무처리 기준을
                  일부 말줄임 테스트 끝
                </p>
                <ul class="store-info">
                  <li><span class="rating">4.7</span> (28)</li>
                  <li class="color-dark">매일 11:00 - 21:30</li>
                </ul>
              </div>
              <div class="img-box">
                <img src="/images/temp/thumbnail_01.jpg" alt="" />
              </div>
            </a>
          </li>
          <li>
            <a href="#0">
              <div class="text-box">
                <h4 class="list-title">외국국적동포 해외 범죄경력증명서 등 업무처리 말줄임 테스트 끝</h4>
                <p class="list-text">
                  외국국적동포 업무 관련 건의사항 등을 반영하여 해외범죄 경력 증명 서류관련 세부기준 등 업무처리 기준을
                  일부 말줄임 테스트 끝
                </p>
                <ul class="store-info">
                  <li><span class="rating">4.7</span> (28)</li>
                  <li class="color-dark">매일 11:00 - 21:30</li>
                </ul>
              </div>
              <div class="img-box">
                <img src="/images/temp/thumbnail_01.jpg" alt="" />
              </div>
            </a>
          </li>
          <li>
            <a href="#0">
              <div class="text-box">
                <h4 class="list-title">외국국적동포 해외 범죄경력증명서 등 업무처리 말줄임 테스트 끝</h4>
                <p class="list-text">
                  외국국적동포 업무 관련 건의사항 등을 반영하여 해외범죄 경력 증명 서류관련 세부기준 등 업무처리 기준을
                  일부 말줄임 테스트 끝
                </p>
                <ul class="store-info">
                  <li><span class="rating">4.7</span> (28)</li>
                  <li class="color-dark">매일 11:00 - 21:30</li>
                </ul>
              </div>
              <div class="img-box">
                <img src="/images/temp/thumbnail_01.jpg" alt="" />
              </div>
            </a>
          </li>
          <li>
            <a href="#0">
              <div class="text-box">
                <h4 class="list-title">외국국적동포 해외 범죄경력증명서 등 업무처리 말줄임 테스트 끝</h4>
                <p class="list-text">
                  외국국적동포 업무 관련 건의사항 등을 반영하여 해외범죄 경력 증명 서류관련 세부기준 등 업무처리 기준을
                  일부 말줄임 테스트 끝
                </p>
                <ul class="store-info">
                  <li><span class="rating">4.7</span> (28)</li>
                  <li class="color-dark">매일 11:00 - 21:30</li>
                </ul>
              </div>
              <div class="img-box">
                <img src="/images/temp/thumbnail_01.jpg" alt="" />
              </div>
            </a>
          </li>
        </ul>
        <button type="button" class="btn-view-more">업체&맛집 정보 더보기</button>
      </section>

      <section class="page-section">
        <h4 class="main-title">지역별 재한정보</h4>
        <p class="main-sub-text">고객님 위치에서 <span class="color-red">가까운</span> 순으로 정보가 제공됩니다.</p>

        <div class="tab-wrap">
          <div class="tab-section" id="tabMain">
            <ul class="swiper-wrapper type-round">
              <li class="swiper-slide active">구인/구직</li>
              <li class="swiper-slide">업체&맛집</li>
              <li class="swiper-slide">도움요청</li>
              <li class="swiper-slide">구인/구직</li>
              <li class="swiper-slide">업체&맛집</li>
              <li class="swiper-slide">도움요청</li>
            </ul>
          </div>

          <div class="tab-content show">
            <ul class="list-wrap">
              <li>
                <a href="#0">
                  <div class="text-box">
                    <h4 class="list-title">구인/구직 외국국적동포 해외 범죄경력증명서 등 업무처리 말줄임 테스트 끝</h4>
                    <p class="list-text">
                      외국국적동포 업무 관련 건의사항 등을 반영하여 해외범죄 경력 증명 서류관련 세부기준 등 업무처리
                      기준을 일부 말줄임 테스트 끝
                    </p>
                  </div>
                  <div class="list-info">
                    <ul class="left">
                      <li>관리자</li>
                      <li>2022.04.01</li>
                    </ul>
                  </div>
                </a>
              </li>
              <li>
                <a href="#0">
                  <div class="text-box">
                    <h4 class="list-title">외국국적동포 해외 범죄경력증명서 등 업무처리 말줄임 테스트 끝</h4>
                    <p class="list-text">
                      외국국적동포 업무 관련 건의사항 등을 반영하여 해외범죄 경력 증명 서류관련 세부기준 등 업무처리
                      기준을 일부 말줄임 테스트 끝
                    </p>
                  </div>
                  <div class="list-info">
                    <ul class="left">
                      <li>관리자</li>
                      <li>2022.04.01</li>
                    </ul>
                  </div>
                </a>
              </li>
            </ul>
            <button type="button" class="btn-view-more">전체정보 더보기</button>
          </div>

          <div class="tab-content">
            <ul class="list-wrap">
              <li>
                <a href="#0">
                  <div class="text-box">
                    <h4 class="list-title">업체&맛집 외국국적동포 해외 범죄경력증명서 등 업무처리 말줄임 테스트 끝</h4>
                    <p class="list-text">
                      외국국적동포 업무 관련 건의사항 등을 반영하여 해외범죄 경력 증명 서류관련 세부기준 등 업무처리
                      기준을 일부 말줄임 테스트 끝
                    </p>
                  </div>
                  <div class="list-info">
                    <ul class="left">
                      <li>관리자</li>
                      <li>2022.04.01</li>
                    </ul>
                  </div>
                </a>
              </li>
            </ul>
            <button type="button" class="btn-view-more">전체정보 더보기</button>
          </div>

          <div class="tab-content">
            <ul class="list-wrap">
              <li>
                <a href="#0">
                  <div class="text-box">
                    <h4 class="list-title">도움요청 외국국적동포 해외 범죄경력증명서 등 업무처리 말줄임 테스트 끝</h4>
                    <p class="list-text">
                      외국국적동포 업무 관련 건의사항 등을 반영하여 해외범죄 경력 증명 서류관련 세부기준 등 업무처리
                      기준을 일부 말줄임 테스트 끝
                    </p>
                  </div>
                  <div class="list-info">
                    <ul class="left">
                      <li>관리자</li>
                      <li>2022.04.01</li>
                    </ul>
                  </div>
                </a>
              </li>
            </ul>
            <button type="button" class="btn-view-more">전체정보 더보기</button>
          </div>

          <div class="tab-content">구인/구직</div>
          <div class="tab-content">업체&맛집</div>
          <div class="tab-content">도움요청</div>
        </div>
      </section>

      <section class="page-section">
        <h4 class="main-title">
          재한들의 순간
          <a href="#0" class="icon-detail view-mb"></a>
          <a href="#0" class="icon-detail-text view-pc">더보기 ></a>
        </h4>

        <div class="moment-info-wrap">
          <div class="card-wrap">
            <ul class="swiper-wrapper">
              <li class="swiper-slide">
                <a href="#0">
                  <div class="img-box">
                    <img src="/images/temp/thumbnail_01.jpg" alt="" />
                  </div>
                  <div class="text-box">
                    <h4 class="card-title">
                      외국국적동포 해외 범죄경력증명서 등 업무처리 말줄임 테스트 말줄임 테스트 말줄임 테스트 말줄임
                      테스트 말줄임 테스트 끝
                    </h4>
                  </div>
                  <div class="user-box">
                    <div class="user-img">
                      <img src="/images/temp/thumbnail_03.png" alt="닉네임님의 프로필 사진" />
                    </div>
                    <div class="user-info">
                      닉네임
                      <ul class="dot-info">
                        <li>좋아요 5</li>
                        <li class="dot">댓글 1</li>
                      </ul>
                    </div>
                  </div>
                </a>
              </li>
              <li class="swiper-slide">
                <a href="#0">
                  <div class="img-box">
                    <img src="/images/temp/thumbnail_01.jpg" alt="" />
                  </div>
                  <div class="text-box">
                    <h4 class="card-title">
                      외국국적동포 해외 범죄경력증명서 등 업무처리 말줄임 테스트 말줄임 테스트 말줄임 테스트 말줄임
                      테스트 말줄임 테스트 끝
                    </h4>
                  </div>
                  <div class="user-box">
                    <div class="user-img">
                      <img src="/images/temp/thumbnail_03.png" alt="닉네임님의 프로필 사진" />
                    </div>
                    <div class="user-info">
                      닉네임
                      <ul class="dot-info">
                        <li>좋아요 5</li>
                        <li class="dot">댓글 1</li>
                      </ul>
                    </div>
                  </div>
                </a>
              </li>
              <li class="swiper-slide">
                <a href="#0">
                  <div class="img-box">
                    <img src="/images/temp/thumbnail_01.jpg" alt="" />
                  </div>
                  <div class="text-box">
                    <h4 class="card-title">
                      외국국적동포 해외 범죄경력증명서 등 업무처리 말줄임 테스트 말줄임 테스트 말줄임 테스트 말줄임
                      테스트 말줄임 테스트 끝
                    </h4>
                  </div>
                  <div class="user-box">
                    <div class="user-img">
                      <img src="/images/temp/thumbnail_03.png" alt="닉네임님의 프로필 사진" />
                    </div>
                    <div class="user-info">
                      닉네임
                      <ul class="dot-info">
                        <li>좋아요 5</li>
                        <li class="dot">댓글 1</li>
                      </ul>
                    </div>
                  </div>
                </a>
              </li>
              <li class="swiper-slide">
                <a href="#0">
                  <div class="img-box">
                    <img src="/images/temp/thumbnail_01.jpg" alt="" />
                  </div>
                  <div class="text-box">
                    <h4 class="card-title">
                      외국국적동포 해외 범죄경력증명서 등 업무처리 말줄임 테스트 말줄임 테스트 말줄임 테스트 말줄임
                      테스트 말줄임 테스트 끝
                    </h4>
                  </div>
                  <div class="user-box">
                    <div class="user-img">
                      <img src="/images/temp/thumbnail_03.png" alt="닉네임님의 프로필 사진" />
                    </div>
                    <div class="user-info">
                      닉네임
                      <ul class="dot-info">
                        <li>좋아요 5</li>
                        <li class="dot">댓글 1</li>
                      </ul>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </section>

      <section class="page-section">
        <h4 class="main-title">
          공지사항
          <a href="#0" class="icon-detail view-mb"></a>
          <a href="#0" class="icon-detail-text view-pc">더보기 ></a>
        </h4>
        <p class="main-sub-text list-new">재한 한국에 있는 각종 정보를 공유합니다.</p>
      </section>
    </div>
  </div>
  <!-- // contents -->
</template>
