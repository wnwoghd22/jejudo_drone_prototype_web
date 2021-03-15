interface ISchedule {
    id?: string;
    date?: string;
    part?: string;
    /** 대기 순번 */
    index?: number;
    /** 전체 대기열 */
    length?: number;
}

/**
 * 특정 일자의 수강 신청자 수를 저장
 */
interface IDayInfo {
    morning: number;
    noon: number;
    afternoon: number;
}

interface IScheduleContext {
    isLoading: boolean;
    /**
     * schedule of user.
     */
    scheduleList: ISchedule[] | undefined;
    fetchScheduleList: () => void;
    postSchedule: (time: ISchedule) => void;
    /**
     * delete schedule of user.
     */
    cancelSchedule: (id: string, time: ISchedule) => void;

    dayInfo: IDayInfo | undefined;
    fetchDayInfo: (date: string) => void;
    
}