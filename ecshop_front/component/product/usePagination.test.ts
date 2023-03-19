import usePagination from './usePagination';
import { act, renderHook } from '@testing-library/react-hooks';

// テストコードはAAAパターンに基づいて書く

describe('usePaginationの単体テスト', () => {
 

  // backHandlerのテスト
  // positive Pattern
  test('Arrange:PageNo=2,totalPage=10の時、Act:戻るボタンを押したとき、Assert:PageNo=1,totalPage=10になる', () => {
   
    // Arrange
    const props = {
      totalPage: 10,
      pageNo: 2,
      setPageNo: jest.fn(),
    };
    const { result } = renderHook(() => usePagination(props));

    // Act
    act(() => {
      result.current.backHandler();
    });

    // Assert
    expect(props.setPageNo).toHaveBeenCalledWith(1);
  });

  // nextHandlerのテスト
  // positive Pattern
  test('Arrange:pageNo=9の時,Act:nextHandlerを実行したとき、Assert:pageNo=10 ', () => {
    // Arrange
    const props = {
      totalPage: 10,
      pageNo: 9,
      setPageNo: jest.fn(),
    };
    const { result } = renderHook(() => usePagination(props));
    // Act
    act(() => {
      result.current.nextHandler();
    });
    // Assert
    expect(props.setPageNo).toHaveBeenCalledWith(10);
  });

    // selectNumberHandlerのテスト
  // positive Pattern
  test('Arrange:pageNo=10 :should update page number when a page number is clicked', () => {
    const props = {
      totalPage: 10,
      pageNo: 5,
      setPageNo: jest.fn(),
    };
    const { result } = renderHook(() => usePagination(props));

    act(() => {
      result.current.selectNumberHandler(7);
    });

    expect(props.setPageNo).toHaveBeenCalledWith(7);
  });
});