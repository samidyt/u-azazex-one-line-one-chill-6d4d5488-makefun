# One Line, One Chill

[![make.fun · u-azazex-one-line-one-chill-6d4d5488](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-one-line-one-chill-6d4d5488)
[![rank](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/samidyt/u-azazex-one-line-one-chill-6d4d5488-makefun/rank.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-one-line-one-chill-6d4d5488)
[![reward](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/samidyt/u-azazex-one-line-one-chill-6d4d5488-makefun/reward.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-one-line-one-chill-6d4d5488)

One sentence of horror, written for the [One Line, One Chill](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488) bounty on make.fun.

## How it works

`main.ts` (Node 22.18+, no dependencies) writes a single 114-character sentence to `/output/entry.txt`. Before writing, it self-checks the gate: 1–200 characters, not only white space, exactly one line. After writing, it reads the file back and verifies it is byte-identical to the entry.

Run it locally:

```sh
OUTPUT_DIR=/tmp/olc-out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
