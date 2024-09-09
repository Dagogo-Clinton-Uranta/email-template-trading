import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';


import Page404 from './pages/Page404';




import CallCenterSolutionsPage from './pages/DepositConfirmationPage';
import WithdrawalRequestPage from './pages/WithdrawalRequestPage';
import GlobeNewswirePage from './pages/GlobeNewswirePage';
import PasswordResetRequestPage from './pages/PasswordResetRequest';
import PromotionalOfferPage from './pages/PromotionalOfferPage';
import SecurityAlertPage from './pages/SecurityAlertPage';
import KycPage from './pages/KycPage';
import WelcomeMessagePage from './pages/WelcomeMessagePage';
import AccountVerificationPage from './pages/AccountPage';
import AccountStatementPage from './pages/AccountStatementPage';
import TradeExectuionPage from './pages/TradeExecutionPage';
import StopLossPage from './pages/StopLossPage';
import MarginCallWarningPage from './pages/MarginCallWarningPage';
import AccountSuspensionPage from './pages/AccountSuspensionPage';
import PlatformMaintenancePage from './pages/PlatformMainetnancePage';
import ReferralProgramPage from './pages/ReferralProgramPage';
import AccountClosurePage from './pages/AccountClosurePage';
import PlatformUpdatePage from './pages/PlatformUpdatePage';
import MarketUpdatePage from './pages/MarketUpdatePage';
import DepositConfirmationPage from './pages/DepositConfirmationPage';
import DepositConfirmationBlackPage from './pages/DepositConfirmationBlackPage';
import WithdrawalRequestBlackPage from './pages/WithdrawalRequestBlackPage';



export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/home" />, index: true },
      


    
      ],
    },
  
  
   
 
   
    { path: 'deposit-confirmation', element: <DepositConfirmationPage /> },
    { path: 'deposit-confirmation-black', element: <DepositConfirmationBlackPage /> },
    { path: 'withdrawal-request', element: <WithdrawalRequestPage /> },
    { path: 'withdrawal-request-black', element: <WithdrawalRequestBlackPage /> },
    { path: 'account-statement', element: <AccountStatementPage /> },
    { path: 'account-statement-black', element: <CallCenterSolutionsPage /> },
    { path: 'password-reset-request', element: <PasswordResetRequestPage /> },
    { path: 'password-reset-request-black', element: <CallCenterSolutionsPage /> },
    { path: 'promotional-offer', element: <PromotionalOfferPage /> },
    { path: 'promotional-offer-black', element: <CallCenterSolutionsPage /> },
    { path: 'security-alert', element: <SecurityAlertPage /> },
    { path: 'security-alert-black', element: <CallCenterSolutionsPage /> },
    { path: 'kyc', element: <KycPage /> },
    { path: 'kyc-black', element: <CallCenterSolutionsPage /> },
    { path: 'welcome-message', element: <WelcomeMessagePage /> },
    { path: 'welcome-message-black', element: <CallCenterSolutionsPage /> },
    { path: 'account-verification', element: <AccountVerificationPage /> },
    { path: 'account-verification-black', element: <CallCenterSolutionsPage /> },
    { path: 'trade-execution', element: <TradeExectuionPage /> },
    { path: 'trade-execution-black', element: <CallCenterSolutionsPage /> },
    { path: 'stop-loss', element: <StopLossPage /> },
    { path: 'stop-loss-black', element: <CallCenterSolutionsPage /> },
    { path: 'margin-call', element: <MarginCallWarningPage /> },
    { path: 'margin-call-black', element: <CallCenterSolutionsPage /> },
    { path: 'account-suspension', element: <AccountSuspensionPage /> },
    { path: 'account-suspension-black', element: <CallCenterSolutionsPage /> },
    { path: 'platform-maintenance', element: <PlatformMaintenancePage /> },
    { path: 'platform-maintenance-black', element: <CallCenterSolutionsPage /> },
    { path: 'market-update', element: <MarketUpdatePage /> },
    { path: 'market-update-black', element: <CallCenterSolutionsPage /> },
    { path: 'referral-program', element: <ReferralProgramPage /> },
    { path: 'referral-program-black', element: <CallCenterSolutionsPage /> },
    { path: 'account-closure', element: <AccountClosurePage /> },
    { path: 'account-closure-black', element: <CallCenterSolutionsPage /> },
    { path: 'platform-update', element: <PlatformUpdatePage /> },
    { path: 'platform-update-black', element: <CallCenterSolutionsPage /> },
    { path: 'globe-newswire', element: <GlobeNewswirePage /> },
    { path: 'globe-newswire-black', element: <CallCenterSolutionsPage /> },
    { path: 'deposit-confirmation', element: <CallCenterSolutionsPage /> },


    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/deposit-confirmation" />, index: true },
        {/* element: <Navigate to="/dashboard/home" />, index: true */},
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
