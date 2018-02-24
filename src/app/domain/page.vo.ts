/**
 * 페이징에 필요한 필수요소 3가지
 * pageIndex: 현재 페이지 인덱스 0,1,2,3,,,
 * pageSize: 한 페이지에 보여지는 갯수
 * totalCount: 뉴스의 총갯수
 * 옵션 요소
 * pageSizeOptions: 한페이지에 보여지는 갯수를 조정하는 옵션
 */
export class PageVO {
  // pageIndex: number;
  // pageSize: number;
  // totalCount: number;
  // pageSizeOptions: number[];

  // PageVo를 생성할때 여러가지 컴포넌트 생성시에도 해당 내용을 쓸 수 있도록 바로 초기 셋팅을 해버리자.
  constructor(public pageIndex: number,
              public pageSize: number,
              public totalCount: number = 0, /* default 초기화 */
              public pageSizeOptions?: number[]) {
    if (!this.pageSizeOptions) {
      this.pageSizeOptions = [5, 15, 30, 60, 90];
    }
  }
}
