// 11개임 ~,~
const lyrics = [
    {
        song: '쓰라려 칼날 같은 눈빛들에 베여서 외로워 몸부림을 쳐도 내 편은 없어',
        track: 'DAY6 - 괴물(Moster)',
    },
    {
        song: '나 또한 사랑을 알고 눈물을 흘리기도 하는 그런 존재야',
        track: 'DAY6 - 괴물(Moster)',
    },
    {
        song: "I don't bite 멀리하지 마 Lonely night 진절머리가 나는 고독함 손을 내밀어 줘 그 순간 그대로 무너져 내릴 거야",
        track: 'DAY6 - 괴물(Moster)',
    },
    {
        song: '걷잡을 수 없이 스르륵 녹아내려요 죽어가던 마음을 기적처럼 살려 낸 그 순간',
        track: 'DAY6 - 녹아내려요(Melt Down)',
    },
    {
        song: '나에게 넌 행운이야 놀라움 뿐이야 이젠 내 차례 Love you hold you give you all I got',
        track: 'DAY6 - 녹아내려요(Melt Down)',
    },
    {
        song: 'Come on and Take my hand Let’s just dance 이 밤에 몸을 맡긴 채 Let me give you all my love',
        track: 'DAY6 - 그녀가 웃었다(She Smiled)',
    },
    {
        song: '망할 인생이란 게임의 플레이어 너(Get it) 나(get it) 앞으로만 가',
        track: 'DAY6 - 망겜(Shxtty Game)',
    },
    {
        song: '도와줘요 Rock&Roll! 그 애 눈에 멋져 보이게 우주에서 가장 근사한 리듬으로 부탁해요 (I really really wanna)',
        track: 'DAY6 - 도와줘요 Rock&Roll(Help Me Rock&Roll)',
    },
    {
        song: "No I'm not ready To be knocked out I know I still got more in me 인생 경기가 되게 할 거니까 쏟아부을게 All of me",
        track: 'DAY6 - Counter',
    },
    {
        song: '다 썩어 버린 우릴 고치려 한다면 그때는 I’m gonna die And you’re gonna die Then what?',
        track: "DAY6 - I'm Fine",
    },
    {
        song: '외로워진 거리 재미없는 장난 희미해진 사랑 나는 여기 살아',
        track: 'DAY6 - 아직 거기 살아(Still There)',
    },
];

const song = document.querySelector('#lyric span:first-child');
const track = document.querySelector('#lyric span:last-child');
// 총 11개 있으므로 인덱스는 0~10임
// Math.random()*11
// lyrics.length => 11
// Math.floor (math-) -> 0부터 10까지 랜덤숫자 나와욤
const todaysLyrics = lyrics[Math.floor(Math.random() * lyrics.length)];

song.innerText = todaysLyrics.song;
track.innerText = todaysLyrics.track;
