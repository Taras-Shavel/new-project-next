"use client"
import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useTranslation } from 'react-i18next';
import '../../i18n'; 
import { SheetSide } from '../components';


const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedOption, setSelectedOption] = useState<string>('English');
    const open = Boolean(anchorEl);

    const { t, i18n } = useTranslation();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (option: string, lng: string) => {
        i18n.changeLanguage(lng);
        setSelectedOption(option);
        handleClose();
    };

    return (
        <div className="w-full h-[56px] p-3 bg-black flex items-center justify-between absolute z-20" style={{ borderBottom: '1px solid #202023' }}>
            <div className='h-full flex'>

                <div className="lg:hidden  ">
                    <SheetSide />
                </div>

                <div className="h-full w-[157px] bg-[#141417] rounded-md py-[6px] px-2 flex items-center justify-between" style={{ border: '1px solid #363639' }}>
                    <p className="h-full w-[117px] text-[#7E808A] text-[14px] font-bold flex items-center">
                        {t('balance')}
                        <span className="text-[#EBEBEF] text-[14px] font-medium ml-2 ">
                            $122,00
                        </span>
                    </p>
                    <img src="./Images/IconPlus.png" alt="Icon Plus" className="w-4 h-4" />
                </div>
            </div>


            <div className="w-[100px] h-full bg-[#141417] py-[6px] px-2 rounded-md flex items-center justify-between" style={{ border: '1px solid #363639' }}>
                <Button
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{ textTransform: 'none' }}
                    className="w-full text-[#7E808A] text-[14px] font-bold"
                >
                    {selectedOption}
                    <img src="./Images/ArrowDown.png" alt="Icon Arrrow Down" className="w-4 h-4 ml-1" />
                </Button>
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                        'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                    sx={{
                        "& .MuiMenu-list": {
                            width: "140px",
                            boxSizing: "border-box",
                            padding: "6px 16px",
                            background: "#202023",
                            borderRadius: "5px",
                            border: "1px solid #363639",
                        },
                        "& .MuiMenu-list li": {
                            width: "50%",
                            height: "30px",
                            boxSizing: "border-box",
                            fontSize: "14px",
                            color: "#EBEBEF"

                        },
                        "& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper": {
                            background: "none",
                            boxShadow: "none"
                        }


                    }}
                >
                    <MenuItem sx={{
                        width: "100%",
                        padding: 0,
                        color: "#EBEBEF",
                        fontSize: "14px",
                    }}
                        onClick={() => handleMenuItemClick('Ukrainian', 'ua')}
                    >Українська</MenuItem>
                    <MenuItem
                        sx={{
                            width: "50%",
                            padding: 0,
                            color: "#EBEBEF",
                            fontSize: "14px",
                        }}
                        onClick={() => handleMenuItemClick('English', 'en')}
                    >English</MenuItem>
                </Menu>

            </div>
        </div>
    )
}
export { Header }