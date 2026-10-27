// Audited story actions. Only actual practice creates skill growth.
// Empty effects mean no ability change; relationships are handled separately.
export const STORY_EFFECTS={
name:[[['basic',1]],[],[]],teacher:[[['basic',1]],[],[]],intro:[[['social',1]],[],[]],shoes:[[['basic',1]],[['social',1]],[]],
report:[[['basic',2]],[['basic',1]],[]],leader:[[['social',1]],[['social',1]],[]],flag:[[['basic',1]],[],[]],meal:[[['basic',1]],[['social',1]],[]],
watch:[[['basic',1]],[['basic',1]],[]],snore:[[],[['social',1]],[]],laundry:[[['basic',1]],[],[]],toilet:[[],[],[]],
ace:[[['social',1]],[['social',1]],[]],credit:[[['social',1]],[['social',1]],[]],no:[[],[['social',1]],[]],weather:[[['social',1]],[['fitness',1]],[['basic',1]]],
ceremony:[[['basic',1]],[['basic',2]],[]],nickname:[[['social',1]],[['social',1]],[]],packing:[[['basic',1]],[['basic',1]],[['basic',1]]],goodbye:[[],[],[]],
f_name:[[['social',1]],[['basic',1]],[]],f_teacher:[[['basic',2]],[],[]],f_shoes:[[['basic',1]],[],[]],f_leader:[[['basic',1]],[['basic',1]],[]],
f_flag:[[],[['basic',1]],[]],f_meal:[[['basic',1]],[['social',1]],[]],f_watch:[[['basic',1]],[],[]],f_laundry:[[],[],[]],f_ace:[[['basic',1]],[['basic',1]],[]],f_no:[[['social',1]],[['social',1]],[]]
};
// Provisional beta demand weights, NOT historical headcount or verified ratios.
export const DEMAND_WEIGHTS={111101:44,111102:6,111103:3,111106:3,131101:6,131102:6,131103:6,161101:6,171101:5,231101:4,231116:3,241101:4,241107:2,311101:1,411101:1};
export const ALLOCATION_NOTE='일반 특기 중심의 베타용 수요 가중치입니다. 2013년 실제 배치 비율은 확인 전입니다.';
