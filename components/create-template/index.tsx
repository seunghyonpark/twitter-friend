import {NextPage} from "next";
import {useStores} from "../../stores";
import {observer} from "mobx-react";
import Questions from "./questions";

const CreateTemplate: NextPage = observer(() => {
        return (
            <>
                정보들을 입력해주세요!
                <Questions />
            </>
        )
    }
);

export default CreateTemplate;
