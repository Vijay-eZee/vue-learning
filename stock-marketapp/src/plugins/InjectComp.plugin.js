import ButtonComp from "../components/common/ButtonField.vue";
import InputComp from "../components/common/InputField.vue";
import InfoBox from "../components/common/InfoBox.vue";
import InfoHeader from "../components/common/InfoHeader.vue";
export default {
  install: (app) => {
    app.component("button-comp", ButtonComp);
    app.component("input-comp", InputComp);
    app.component("info-box", InfoBox);
    app.component("info-header", InfoHeader);
  },
};
