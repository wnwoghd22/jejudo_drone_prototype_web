interface IWeather {
    /** 기온 */
    T1H: string;
    /** 1시간 강수량 */
    RN1: string;
    /** 동서바람성분 */
    UUU: string;
    /** 남북바람성분 */
    VVV: string;
    /** 습도*/
    REH: string;
    /** 강수형태*/
    PTY: string;
    /** 풍향 */
    VEC: string;
    /** 풍속 */
    WSD: string;
}

interface IWeatherContext {
    isLoading: boolean;
    weather: IWeather | undefined;
    fetchWeather: () => void;
    refresh: () => void;
}