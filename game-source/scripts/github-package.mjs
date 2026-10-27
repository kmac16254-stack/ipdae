import {readFile,writeFile,mkdir,cp} from 'node:fs/promises';
const target='outputs/github';await mkdir(target+'/.github/workflows',{recursive:true});
let html=await readFile('outputs/ipdae-beta-04.html','utf8');html=html.replace('<script type="module">','<script type="module">document.documentElement.dataset.staticBuild="true";\n').replace("if(location.protocol==='file:')", "if(location.protocol==='file:'||document.documentElement.dataset.staticBuild==='true')").replace('다운로드판에서는 서버로 전송되지 않습니다.','공개 테스트판에서는 서버로 전송되지 않고 이 기기에만 저장됩니다.');
await writeFile(target+'/index.html',html);await writeFile(target+'/.nojekyll','');
await writeFile(target+'/.github/workflows/pages.yml',`name: Publish beta to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: github-pages
  cancel-in-progress: true
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: public
      - uses: actions/deploy-pages@v4
        id: deployment
`);
await mkdir(target+'/public',{recursive:true});await writeFile(target+'/public/index.html',html);await writeFile(target+'/public/.nojekyll','');
await mkdir(target+'/game-source',{recursive:true});for(const f of ['src','tests','scripts','drizzle'])await cp(f,target+'/game-source/'+f,{recursive:true});for(const f of ['package.json','README.md','RESEARCH.md','DATE_RESEARCH.md','FEEDBACK-v03.md'])await cp(f,target+'/game-source/'+f);
await writeFile(target+'/README.md',`# 입대할게요 — 베타 0.4

모바일·PC 브라우저로 플레이하는 선택형 훈련소 게임입니다.

## 처음 배포할 때

저장소 Settings → Pages → Build and deployment → Source를 **GitHub Actions**로 선택한 뒤 Actions에서 Publish beta to GitHub Pages를 실행합니다. 배포가 성공하면 해당 실행의 github-pages 주소가 플레이 주소입니다.

공개 게임 파일은 public/index.html입니다. 루트 index.html은 별도 다운로드·열람용입니다. 게임 소스는 game-source/에 보관했습니다.

## 베타 안내

- 훈련소 35일, 일별 타임라인, 21개월 복무 기준 전역 D-day.
- 수직 대화창, 교육 퀴즈, 관계·능력치 성장.
- 기기별 브라우저 자동 저장. 새 기기에는 진행이 옮겨지지 않습니다.
- 경험담은 각 이용자 기기에 저장되며 JSON 파일로 내보낼 수 있습니다. 서버에 전송되지 않습니다.
- 일반 주특기 15개에 게임용 임시 수요 가중치를 사용합니다. 실제 2013년 비율 통계가 아닙니다.
- 인물 사진은 생성한 가상 인물입니다. 군 교육·사건·입영 경로는 게임용으로 각색했습니다.
`);
console.log('GitHub upload bundle prepared: '+target);
