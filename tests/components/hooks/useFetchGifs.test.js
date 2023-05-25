import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../../src/hooks/useFetchGifs";

describe("testing useFetchGifs custom hook", () => {
  test("it must return the initial state", () => {
    const { result } = renderHook(() => useFetchGifs("BTS"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("it must return an array of images and isLoading in false", async () => {
    const { result } = renderHook(() => useFetchGifs("BTS"));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
