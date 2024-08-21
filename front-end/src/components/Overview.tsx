"use client"
import { FC, useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import { useAppDispatch, useAppSelector } from '@/hooks/redux.hook';
import { dataActions } from '../redux/slices/data.slice';



interface IData {
    id: number,
    text: string
}

const Overview: FC = () => {
    const { t, i18n } = useTranslation();

    const data: IData[] = [
        { id: 1, text: `${t('name')}` },
        { id: 2, text: `${t('method')}` },
        { id: 3, text: `${t('created')}` },
        { id: 4, text: `${t('amount')}` },
        { id: 5, text: `${t('status')}` },
    ]

    const newData = useAppSelector(state => state.dataReducers)
    const dispatch = useAppDispatch()
    const [newCurrentPage, setNewCurrentPage] = useState<number>(1);
    const [newItemsPerPage, setNewItemsPerPage] = useState<number>(4);

    useEffect(() => {
        dispatch(dataActions.getAll({ page: newCurrentPage, limit: newItemsPerPage }))
    }, [dispatch, newCurrentPage, newItemsPerPage])

    const newHandlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setNewCurrentPage(page);
    };

    const totalPages = Math.ceil(newData.data.length / newItemsPerPage);

    console.log(newData.data)


    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);


    };


    return (
        <div className="h-screen w-full bg-black flex items-center justify-center">
            <div className='w-[80%]'>
                <h1 className="text-[#FFFFFF] text-[32px] font-semibold mb-[32px] mt-[60px]">
                    {t('overview')}
                </h1>

                <div className="border-b border-[#141417] w-full mb-[32px]"></div>

                <div className="w-full  h-[136px] flex items-center justify-between mb-[32px] ">
                    <div className="w-[50%] h-full p-4 rounded-lg bg-[#141417] border border-[#FFFFFF0D] mr-[30px]">
                        <div className="w-[40px] h-[40px] rounded-[8px] flex items-center justify-center mb-3"
                            style={{
                                border: "1px solid rgba(226, 228, 105, 0.3)",
                                background: "linear-gradient(180deg, rgba(252, 255, 114, 0.05) 0%, rgba(252, 255, 114, 0.4) 100%), rgba(255, 255, 255, 0.05)"
                            }}>
                            <img src="./Images/Mask.png" alt="Icon Mask" />
                        </div>
                        <div className="w-[49px] h-[52px]">
                            <p className="text-[14px] font-normal mb-1" style={{ color: "rgba(255, 255, 255, 0.6)" }}>{t('proxies')}</p>
                            <p className="text-5 font-semibold" style={{ color: "rgba(255, 255, 255, 1)" }}>3</p>
                        </div>
                    </div>

                    <div className="w-[50%] h-full p-4 rounded-lg bg-[#141417] border border-[#FFFFFF0D]">
                        <div className="w-[40px] h-[40px] rounded-[8px] flex items-center justify-center mb-3"
                            style={{
                                border: "1px solid rgba(226, 228, 105, 0.3)",
                                background: "linear-gradient(180deg, rgba(252, 255, 114, 0.05) 0%, rgba(252, 255, 114, 0.4) 100%), rgba(255, 255, 255, 0.05)"
                            }}>
                            <img src="./Images/Dollar.png" alt="Icon Dollar" />
                        </div>
                        <div className=" h-[52px]">
                            <p className="text-[14px] font-normal mb-1" style={{ color: "rgba(255, 255, 255, 0.6)" }}>{t('amountSpent')}</p>
                            <p className="text-5 font-semibold" style={{ color: "rgba(255, 255, 255, 1)" }}>$ 267,00</p>
                        </div>
                    </div>

                </div>

                <div className="w-full h-[336px]">
                    <h1 className="text-[14px] text-[#BABAC1] font-normal mb-3">{t('latestTransactions')}</h1>

                    <div className="w-full h-[304px] p-4 rounded-[12px]"
                        style={{ border: "1px solid rgba(255, 255, 255, 0.05)", background: "rgba(20, 20, 23, 1)" }}>
                            

                        <div className="w-full overflow-x-auto overflow-y-hidden max-h-64  scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-colorScroll scrollbar-track-transparent">

                            <div className='min-w-[720px]'>

                                <div className="w-full h-[32px] py-[6px] px-4 rounded-[6px] mb-3 flex items-center justify-between"
                                    style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.05)" }}>

                                    {data.map(item => (
                                        <div key={item.id} className="w-[123px] h-5">
                                            <p className="text-[14px] font-normal" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                                                {item.text}
                                            </p>
                                        </div>
                                    ))}
                                    <div className="w-6 h-5"></div>
                                </div>
                                <div className="h-[176px] mb-3 max-xl:mb-0">
                                    {newData.data.map((item) => (
                                        <ul key={item.id} className="h-[44px] py-3 px-4 text-[#FFFFFF] text-[14px] font-normal flex justify-between"
                                            style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
                                            <li className="w-[123px] h-full mr-3">{item.name}</li>
                                            <li className="w-[123px] h-full mr-3">{item.method}</li>
                                            <li className="w-[123px] h-full mr-3">{item.createdOn.slice(0, 10)}</li>
                                            <li className="w-[123px] h-full mr-3">{item.amount}</li>
                                            <li className="w-[123px] h-full mr-3">
                                                <div className={`w-[fit-content] py-[2px] px-2 text-[12px] font-medium rounded-[3px] flex items-center
                                                    ${item.status === 'Cancelled' ? 'h-full bg-[#363639]' : 'h-full bg-[#123E2E]'}`}>
                                                    {`${t(item.status)}`}
                                                </div>
                                            </li>
                                            <li className="w-6 h-5 cursor-pointer flex items-center">
                                                <IconButton onClick={handleClick} sx={{ padding: 0, height: 15 }}>
                                                    <MoreHorizIcon sx={{ color: 'white', height: 15 }} />
                                                </IconButton>
                                                <Menu
                                                    id="simple-menu"
                                                    anchorEl={anchorEl}
                                                    open={Boolean(anchorEl)}
                                                    onClose={handleClose}
                                                    MenuListProps={{ 'aria-labelledby': 'simple-menu' }}
                                                    sx={{
                                                        "& .MuiMenu-list": {
                                                            width: 140,
                                                            height: 32,
                                                            boxSizing: "border-box",
                                                            padding: "6px 16px",
                                                            background: "#202023",
                                                            borderRadius: "5px",
                                                            border: "1px solid #363639"
                                                        },
                                                        "& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper": {
                                                            background: "none",
                                                            boxShadow: "none"
                                                        }
                                                    }}
                                                >
                                                    <MenuItem onClick={handleClose}
                                                        sx={{
                                                            width: "100%",
                                                            height: "100%",
                                                            boxSizing: "border-box",
                                                            padding: 0,
                                                            color: "#EBEBEF",
                                                            fontSize: "14px",
                                                            fontWeight: 400
                                                        }}
                                                    >{t('view')}</MenuItem>
                                                </Menu>
                                            </li>
                                        </ul>
                                    ))}
                                </div>

                            </div>
                        </div>



                        <Pagination
                            count={10}
                            page={newCurrentPage}
                            onChange={newHandlePageChange}
                            className='max-xl:mt-2'
                            sx={{
                                '& .MuiPagination-ul': {
                                    justifyContent: 'center',
                                },
                                '& .MuiPaginationItem-root': {
                                    width: 40,
                                    height: 40,
                                    borderRadius: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    boxSizing: 'border-box',
                                    color: '#7E808A',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    '&.Mui-selected': {
                                        color: 'white',
                                        backgroundColor: 'rgba(252, 255, 114, 0.1)',
                                        background: "radial-gradient(497.24% 578.75% at 49.33% 46.25%, rgba(252, 255, 114, 0) 0%, #FCFF72 100%)",
                                        border: "1px solid rgba(226, 228, 105, 0.3)",
                                    },
                                    '&:hover': {
                                        color: "white",
                                        background: "radial-gradient(497.24% 578.75% at 49.33% 46.25%, rgba(252, 255, 114, 0) 0%, #FCFF72 100%)",
                                        border: "1px solid rgba(226, 228, 105, 0.3)",
                                    },
                                },
                                '& .MuiPagination-ul li:first-of-type': {
                                    marginRight: "auto",
                                    width: "110px",
                                    height: "32px",
                                    boxSizing: 'border-box',
                                    display: 'flex',
                                    justifyContent: "center",
                                    alignItems: 'center',

                                },
                                '& .MuiPagination-ul li:first-of-type button , & .MuiPagination-ul li:last-of-type button': {

                                    '&:hover': {
                                        width: "fit-content",
                                        background: "none",
                                        border: "none",
                                    },

                                },
                                '& .MuiPagination-ul li:last-of-type': {
                                    marginLeft: "auto",
                                    width: "90px",
                                    height: "32px",
                                    display: 'flex',
                                    justifyContent: "center",
                                    alignItems: 'center'
                                },
                                
                            }}
                            renderItem={(item) => (
                                <PaginationItem
                                    {...item}
                                    components={{
                                        previous: () => <span className="text-[#7E808A] text-[14px] font-medium">{t('previous')}</span>,
                                        next: () => <span className="text-[#FCFF72] text-[14px] font-medium">{t('next')}</span>,
                                    }}
                                />
                            )}
                        />

                    </div>
                </div>
            </div>
        </div >
    )
}

export { Overview };
