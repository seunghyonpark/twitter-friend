import {NextPage} from "next";
import {StyledMenuItem, StyledMenuList } from "../../styles/create-menu.style";
import Link from "next/link";
import {MenuText} from "../../utils";
const CreateMenu: NextPage = () => {
    return (
        <StyledMenuList>
            <Link href="/basic">
                <StyledMenuItem>
                    트친소 ({MenuText.basic})
                </StyledMenuItem>
            </Link>
            <Link href="/algorithm">
                <StyledMenuItem>
                    {MenuText.algorithm} 트친소
                </StyledMenuItem>
            </Link>
            <Link href="/frontend">
                <StyledMenuItem>
                    {MenuText.frontend} 트친소
                </StyledMenuItem>
            </Link>
            {/*<StyledMenuItem onClick={() => handleClick(CreateMenuEnum.FRONTEND)}>*/}
            {/*    프론트엔드 트친소*/}
            {/*</StyledMenuItem>*/}
            {/*<StyledMenuItem onClick={() => handleClick(CreateMenuEnum.BACKEND)}>*/}
            {/*    벡엔드 트친소*/}
            {/*</StyledMenuItem>*/}
            {/*<StyledMenuItem onClick={() => handleClick(CreateMenuEnum.MACHINE_LEARNING)}>*/}
            {/*    머신러닝 트친소*/}
            {/*</StyledMenuItem>*/}
            {/*<StyledMenuItem onClick={() => handleClick(CreateMenuEnum.BLOCKCHAIN)}>*/}
            {/*    블록체인 트친소*/}
            {/*</StyledMenuItem>*/}
        </StyledMenuList>
    )
}
export default CreateMenu;
