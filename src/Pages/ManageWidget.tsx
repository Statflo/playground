import { useFormik } from "formik";
import { Fragment, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { WidgetType } from "@statflo/textkit-widget-events";
import { useContainer } from "../providers/ContainerProvider";
import Modal from "../components/Modal";
import { Button, Dropdown, FormGroup, TextInput, DropdownOption } from "@statflo/textkit-ui-library";
import PageTitle from "../components/PageTitle";
import classNames from "../utils/classnames";
import { getEnv, getEnvList, scopeOptions, typeOptions } from '../utils/selects';
import { useWidgets } from "../providers/WidgetProvider";
import Select from "../components/Select";
import { Widget, WidgetState } from "../types";

export default function ManageWidget() {
    const [open, setOpen] = useState<boolean>(false);
    const [filterEnv, setFilterEnv] = useState<string>('all');
    const [filterType, setFilterType] = useState<string>('all');
    const [filterVisible, setFilterVisible] = useState<string>('all');
    const [envList, setEnvList] = useState<DropdownOption[]>([
        { id: '0', label: 'Select Environment', value: '0' }
    ]);
    const { setNotification } = useContainer();
    const { envs, widgets, updateWidgets, deleteWidget } = useWidgets();
    const form = useFormik({
        initialValues: {
            id: '',
            env_id: envList[0],
            name: '',
            type: typeOptions[2],
            scope: scopeOptions[1],
            url: '',
            domain: '',
            order: 0,
            enabled: true,
        },
        onSubmit: values => {
            updateWidgets({
                ...values,
                env_id: values.env_id.id,
                type: values.type.value,
                scope: values.scope.value
            });
            setNotification({
                title: 'Successfully saved!',
                message: 'Widgets have been updated.'
            });
            handleClearForm();
        }
    });

    useEffect(() => {
        const list = getEnvList(envs);

        if (list.length > 0) {
            form.setFieldValue('env_id', list[0]);
        }

        setEnvList(list);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [envs]);

    const handleAddWidget = () => {
        form.resetForm();
        form.setFieldValue('id', uuid());
        setOpen(true);
    }

    const handleClearForm = () => {
        setOpen(false);
        form.resetForm();
    }

    const handleEditWidget = (key: string) => {
        form.setFieldValue('id', widgets[key].id);
        form.setFieldValue('env_id', getEnv(widgets[key].env_id, envList));
        form.setFieldValue('name', widgets[key].name);
        form.setFieldValue('type', typeOptions.filter(item => item.value === widgets[key].type)[0]);
        form.setFieldValue('scope', scopeOptions.filter(item => item.value === widgets[key].scope)[0]);
        form.setFieldValue('url', widgets[key].url);
        form.setFieldValue('domain', widgets[key].domain);
        form.setFieldValue('order', widgets[key].order);
        form.setFieldValue('enabled', widgets[key].enabled);
        setOpen(true);
    }

    const handleDeleteWidget = (id: string) => {
        deleteWidget(id);
        setNotification({
            title: 'Successfully deleted!',
            message: 'Widget has been deleted.'
        });
        handleClearForm();
    }

    const toggleWidgetVisibility = (id: string, enabled: boolean) => {
        updateWidgets({
            ...widgets[id],
            enabled: !enabled
        });
    }

    const filterWidgets = () => {
        let list: Widget[] = Object.values(widgets);

        if (filterEnv !== 'all') {
            list = list.filter(widget => widget.env_id === filterEnv);
        }

        if (filterType !== 'all') {
            list = list.filter(widget => widget.type === filterType);
        }

        if (filterVisible !== 'all') {
            list = list.filter(widget => filterVisible === "true" ? widget.enabled : !widget.enabled);
        }

        return list;
    };

    return (
        <Fragment>
            <div className="inline-block min-w-full align-middle space-y-6">
                <PageTitle 
                    title="Manage Widgets"
                    description="A list of widgets added to the playground."
                    label="Add Widget"
                    onClick={handleAddWidget}
                />
                <div className="-mx-4 mt-10 ring-1 ring-gray-spacer sm:-mx-6 md:mx-0 md:rounded-lg bg-white overflow-hidden shadow-md">
                    <div className="flex items-center justify-end border-b border-gray-spacer p-2 space-x-3">
                        <Select value={filterEnv} onChange={e => setFilterEnv(e.currentTarget.value)}>
                            <option value="all">All Environments</option>
                            {Object.values(envs).map(env => (
                                <option key={env.id} value={env.id}>{env.name}</option>
                            ))}
                        </Select>
                        <Select value={filterType} onChange={e => setFilterType(e.currentTarget.value)}>
                            <option value="all">All Types</option>
                            <option value={WidgetType.Action}>Action</option>
                            <option value={WidgetType.Sendable}>Sendable</option>
                            <option value={WidgetType.Standard}>Standard</option>
                            <option value={WidgetType.Timeline}>Timeline</option>
                        </Select>
                        <Select value={filterVisible} onChange={e => setFilterVisible(e.currentTarget.value)}>
                            <option value="all">All Visibility</option>
                            <option value="true">Enabled</option>
                            <option value="false">Disabled</option>
                        </Select>
                    </div>
                    <table className="min-w-full divide-y divide-gray-spacer">
                        <thead>
                            <tr>
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-default sm:pl-6">
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-default lg:table-cell"
                                >
                                    Environment
                                </th>
                                <th
                                    scope="col"
                                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-default lg:table-cell"
                                >
                                    Type
                                </th>
                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                    <span className="sr-only">Select</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterWidgets().map((widget: Widget, index) => (
                                <tr key={widget.id}>
                                    <td
                                        className={classNames(
                                            index === 0 ? '' : 'border-t border-transparent',
                                            'relative py-4 pl-4 sm:pl-6 pr-3 text-sm'
                                        )}
                                    >
                                        <div className="font-medium text-gray-default">
                                            {widget.name}<br />
                                            <span className="text-sm font-normal text-gray-500">{widget.url}</span>
                                        </div>
                                        {index !== 0 ? <div className="absolute right-0 left-6 -top-px h-px bg-gray-spacer" /> : null}
                                    </td>
                                    <td
                                        className={classNames(
                                            index === 0 ? '' : 'border-t border-gray-spacer',
                                            'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                                        )}
                                    >
                                        {getEnv(widget.env_id, envList)?.label ?? 'Unknown'}
                                    </td>
                                    <td
                                        className={classNames(
                                            index === 0 ? '' : 'border-t border-gray-spacer',
                                            'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                                        )}
                                    >
                                        {widget.type}
                                    </td>
                                    <td
                                        className={classNames(
                                            index === 0 ? '' : 'border-t border-transparent',
                                            'relative py-3.5 pl-3 pr-4 sm:pr-6 text-right text-sm font-medium space-x-3'
                                        )}
                                    >
                                        <button
                                            type="button"
                                            onClick={() => toggleWidgetVisibility(widget.id, widget.enabled)}
                                            className="inline-flex items-center rounded-md border border-gray-spacer bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-default shadow-sm hover:bg-gray-hover focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                        >
                                            {widget.enabled ? 'Disable' : 'Enable'}<span className="sr-only"></span>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleEditWidget(widget.id)}
                                            className="inline-flex items-center rounded-md border border-gray-spacer bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-default shadow-sm hover:bg-gray-hover focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                        >
                                            Edit<span className="sr-only"></span>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleDeleteWidget(widget.id)}
                                            className="inline-flex items-center rounded-md border border-gray-spacer bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-default shadow-sm hover:bg-gray-hover focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                        >
                                            Delete<span className="sr-only"></span>
                                        </button>
                                        {index !== 0 ? <div className="absolute right-6 left-0 -top-px h-px bg-gray-spacer" /> : null}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal
                title="Widget"
                open={open}
                setOpen={setOpen}
            >
                <form onSubmit={form.handleSubmit} className="space-y-2">
                    <FormGroup label="Environment" required>
                        <Dropdown 
                            selected={form.values.env_id}
                            options={envList}
                            onChange={opts => form.setFieldValue('env_id', opts)}
                        />
                    </FormGroup>
                    <FormGroup label="Name" required>
                        <TextInput
                            autoFocus
                            required
                            value={form.values.name}
                            onChange={form.handleChange('name')}
                        />
                    </FormGroup>
                    <FormGroup label="URL" required>
                        <TextInput
                            required
                            value={form.values.url}
                            onChange={form.handleChange('url')}
                        />
                    </FormGroup>
                    <FormGroup label="Domain" required>
                        <TextInput
                            required
                            value={form.values.domain}
                            onChange={form.handleChange('domain')}
                        />
                    </FormGroup>
                    <div className="grid grid-cols-2 gap-3">
                        <FormGroup label="Type" required>
                            <Dropdown 
                                    selected={form.values.type}
                                options={typeOptions}
                                onChange={opts => form.setFieldValue('type', opts)}
                            />
                        </FormGroup>
                        <FormGroup label="Scope" required>
                            <Dropdown
                                    selected={form.values.scope}
                                options={scopeOptions}
                                onChange={opts => form.setFieldValue('scope', opts)}
                            />
                        </FormGroup>
                    </div>
                    {form.values.type.value !== WidgetType.Timeline && 
                        <FormGroup label="Sort Order" required>
                            <TextInput
                                type="number"
                                required
                                value={form.values.order}
                                onChange={form.handleChange('order')}
                            />
                        </FormGroup>
                    }
                    <div className="space-x-2">
                        <Button type="submit">Save</Button>
                        <Button onClick={handleClearForm} type="button" reversed>Cancel</Button>
                    </div>
                </form>
            </Modal>
        </Fragment>
    )
}