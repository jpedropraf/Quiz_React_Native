export type RootStackParamList = {
    start: undefined,
    game: { playerName: string },
    end: { playerName: string; score: number },

    game_main: { playerName: string },
    game_result: { playerName: string; score: number },
}