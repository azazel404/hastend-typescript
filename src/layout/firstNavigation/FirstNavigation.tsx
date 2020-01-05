import React from 'react';
import { Avatar, Icon, Badge, Popover } from '@material-ui/core';
import './index.scss';

//interface function void
interface Props {
  backgroundColor: string;
}

const FirstNavigation: React.FunctionComponent<Props> = props => {
  const [anchorAvatarProfile, setAnchorAvatarProfile] = React.useState<HTMLDivElement | null>(null);
  const [anchorNotification, setAnchorNotification] = React.useState<HTMLDivElement | null>(null);

  const HandleClickAvatarProfile = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorAvatarProfile(event.currentTarget);
  };

  const HandleClickNotification = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorNotification(event.currentTarget);
  };

  const handleCloseAvatarProfile = () => {
    setAnchorAvatarProfile(null);
  };

  const handleCloseNotification = () => {
    setAnchorNotification(null);
  };

  const OpenAnchorAvatarProfile = Boolean(anchorAvatarProfile);
  const OpenAnchorNotification = Boolean(anchorNotification);
  const { backgroundColor } = props;

  return (
    <>
      <div className='first-sidenav' style={{ backgroundColor: backgroundColor }}>
        <div className='first-sidenav-app-logo'>
          <div className='app-logo-placeholder'>H</div>
        </div>

        <div className='first-sidenav-icon-menu'>
          <div className='first-sidenav-icon-menu-top'>
            {/* <div onClick={HandleClickNotification} style={{cursor:'pointer'}}>
              <Badge badgeContent='5' color='primary'>
                <Icon>notifications_none</Icon>
              </Badge>
            </div> */}
            {/* <Popover
              open={OpenAnchorNotification}
              anchorEl={anchorNotification}
              onClose={handleCloseNotification}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'center',
                horizontal: 'left'
              }}
            >
              <div style={{ width: '200px', padding: '20px 15px 30px 15px' }}>
                <div style={{ textAlign: 'center' }}>NOTIFICATION</div>
                <div className='divider divider-solid my-1' />
                <Avatar
                  style={{ width: 'auto', height: 'auto', margin: '15px 30px' }}
                  alt='profile'
                  src='https://i.pravatar.cc/300'
                  className='rounded-circle header-avatar'
                />
                <div style={{ textAlign: 'center' }}>John Doe</div>
                <div style={{ fontSize: '18px', textAlign: 'center' }}>
                  <b>John Doe</b>
                </div>
              </div>
            </Popover> */}
          </div>
          {/* <div className='first-sidenav-icon-menu-bottom'>
            <Icon>help</Icon>
            <Icon>apps</Icon>
          </div> */}
        </div>

        <div className='first-sidenav-avatar' onClick={HandleClickAvatarProfile}>
          <Avatar style={{ width: '32px', height: '32px' }} alt='profile' src='https://i.pravatar.cc/300' />
        </div>
        <Popover
          open={OpenAnchorAvatarProfile}
          anchorEl={anchorAvatarProfile}
          onClose={handleCloseAvatarProfile}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'left'
          }}
        >
          <div style={{ width: '200px', padding: '20px 15px 30px 15px' }}>
            <div style={{ textAlign: 'center' }}>ACCOUNT</div>
            <div className='divider divider-solid my-1' />
            <Avatar
              style={{ width: 'auto', height: 'auto', margin: '15px 30px' }}
              alt='profile'
              src='https://i.pravatar.cc/300'
              className='rounded-circle header-avatar'
            />
            <div style={{ textAlign: 'center' }}>John Doe</div>
            <div style={{ fontSize: '18px', textAlign: 'center' }}>
              <b>John Doe</b>
            </div>
          </div>
        </Popover>
      </div>
    </>
  );
};

export default FirstNavigation;
